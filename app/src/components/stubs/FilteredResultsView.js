import React, { Component } from 'react';
import { Card } from 'reactstrap';

class FilteredResultsView extends Component {
    constructor(props) {
        super(props)
    }

    // displays filtered results
    render() {
        // let filteredResults = this.props.results;
        let filteredResults = [
            { 
                "properties": {
                    "Day": [
                        "Monday",
                        "Tuesday"
                    ],
                    "Time_Start": "6:15AM",
                    "Time_End": "7:00AM",
                    "Meal_Served": ["Breakfast"],
                    "Age_Served": "All",
                    "Gender_Served": "All",
                    "People_Served": "Open to all",
                    "Location": "2515 Western Ave., Seattle",
                    "Name_of_Program": "Millionair Club Charity"
                },
                "geometry": {
                    "Type": "Point",
                    "coordinates": [
                        47.610471,
                        -122.35034099999
                    ]
                },
            },
            {
                "properties": {
                    "Day": [
                        "Monday",
                        "Tuesday"
                    ],
                    "Time_Start": "6:15AM",
                    "Time_End": "9234",
                    "Meal_Served": ["Breakfast"],
                    "Age_Served": "All",
                    "Gender_Served": "All",
                    "People_Served": "Open to all",
                    "Location": "2515 Western Ave., Seattle",
                    "Name_of_Program": "Millionair Club Charity"
                },
                "geometry": {
                    "Type": "Point",
                    "coordinates": [
                        47.610471,
                        -122.35034099999
                    ]
                },
            }
        ];

        return (
            <div className="form-group my-cards">
                <div className="card-container">
                    {filteredResults.map((card, i) => {
                        return (
                            <Card>
                                <p>{filteredResults[i].properties["Name_of_Program"]}</p>
                                <p>{filteredResults[i].properties["People_Served"]}</p>
                                <p>{filteredResults[i].properties["Meal_Served"]}</p>
                                <p>{filteredResults[i].properties["Time_Start"]}-{filteredResults[i].properties["Time_End"]}</p>
                                <p>{filteredResults[i].properties["Day"]}</p>
                                <p>{filteredResults[i].properties["Location"]}</p>
                            </Card>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default FilteredResultsView;