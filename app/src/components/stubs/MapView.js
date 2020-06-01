import React, { Component, useState, useEffect } from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps";
import * as MealData from "./data/meal_programs.json";
import mapStyles from "./mapStyles";


class MapView extends Component {

    constructor(props) {
        super(props);
    }

    // displays Map based on state
    render() {
        let self = this;

        function Map() {
            const [selectedMeal, setSelectedMeal] = useState(null);

            useEffect(() => {
                const listener = e => {
                    if (e.key === "Escape") {
                        setSelectedMeal(null);
                    }
                };
                window.addEventListener("keydown", listener);
    
                return () => {
                    window.removeEventListener("keydown", listener);
                };
            }, []);
    
            return (
                <GoogleMap
                    defaultZoom={10}
                    defaultCenter={{ lat: 47.623047, lng: -122.349624 }}
                    defaultOptions={{ styles: mapStyles }}
                >
                    {self.props.meals.map(Meal => (
                        <Marker
                            key={Meal.properties.Name_of_Program}
                            position={{
                                lat: Meal.geometry.coordinates[0],
                                lng: Meal.geometry.coordinates[1]
                            }}
                            onClick={() => {
                                setSelectedMeal(Meal);
                            }}
                            

                        />
                    ))}

                    {selectedMeal && (
                        <InfoWindow
                            onCloseClick={() => {
                                setSelectedMeal(null);
                            }}
                            position={{
                                lat: selectedMeal.geometry.coordinates[0],
                                lng: selectedMeal.geometry.coordinates[1]
                            }}>
                            <div>
                                <h2>{selectedMeal.properties['Name_of_Program']}</h2>
                                <p>{selectedMeal.properties['Location']}</p>
                                <p>Days Served: {selectedMeal.properties['Days']}</p>
                                <p>{selectedMeal.properties['Meal_Served']}: {selectedMeal.properties['Time_Start']} - {selectedMeal.properties['Time_End']}</p>
                                <p>People Served: {selectedMeal.properties['People_Served']}</p>
                            </div>
                        </InfoWindow>
                    )}
                </GoogleMap>
            );
        }

        let MapWrapped = withScriptjs(withGoogleMap(Map));

        // console.log(this.props)

        return(
        <div style={{ width: "50vw", height: "50vh" }}>
            <MapWrapped
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
        )
    }
}

export default MapView;