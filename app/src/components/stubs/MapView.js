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
        super(props)
    }

    

    // displays Map based on state
    render() {
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
                    {MealData.features.map(Meal => (
                        <Marker
                            key={Meal.properties.Name_of_Program}
                            position={{
                                lat: Meal.geometry.coordinates[1],
                                lng: Meal.geometry.coordinates[0]
                            }}
                            onClick={() => {
                                setSelectedMeal(Meal);
                            }}
                            icon={{
                                url: ``,
                                scaledSize: new window.google.maps.Size(25, 25)
                            }}
                        />
                    ))}
    
                    {selectedMeal && (
                        <InfoWindow
                            onCloseClick={() => {
                                setSelectedMeal(null);
                            }}
                            position={{
                                lat: selectedMeal.geometry.coordinates[1],
                                lng: selectedMeal.geometry.coordinates[0]
                            }}
                        >
                            <div>
                                <h2>{selectedMeal.properties['Name_of_Program']}</h2>
                                <p>{selectedMeal.properties['Location']}</p>
                            </div>
                        </InfoWindow>
                    )}
                </GoogleMap>
            );
        }

        let MapWrapped = withScriptjs(withGoogleMap(Map));
        return(
        <div style={{ width: "100vw", height: "100vh" }}>
            <MapWrapped
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCzAoW1y3spHJQQv62UOAN0HwkqhqROTEU`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
        )
    }
}

export default MapView;