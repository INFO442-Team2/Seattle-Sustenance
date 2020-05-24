import React, { Component } from "react";
import { Button, Card } from "reactstrap";
import Select from "react-select";
import { Header } from "./HeaderView";

// Added by Soham :)
import MealProgramModel from "./MealProgramsModel";

// form for users to enter in their filters
// required prop: GoController
class FindAMealView extends Component {
  constructor(props) {
    super(props);
    //Added By Soham: 
    let mealProgramModel = new MealProgramModel();
  }

  // displays upload form
  render() {
    let mealOptions = [
      { value: "breakfast", label: "Breakfast" },
      { value: "lunch", label: "Lunch" },
      { value: "dinner", label: "Dinner" },
      { value: "snack", label: "Snack" },
      { value: "any", label: "Any" },
    ];

    let peopleServed = [
      { value: "women", label: "Women" },
      { value: "men", label: "Men" },
      { value: "children", label: "Children" },
      { value: "d", label: "D" },
      { value: "e", label: "E" },
    ];

    let dayServed = [
      { value: "sunday", label: "Sunday" },
      { value: "monday", label: "Monday" },
      { value: "tuesday", label: "Tuesday" },
      { value: "wednesday", label: "Wednesday" },
      { value: "thursday", label: "Thursday" },
      { value: "friday", label: "Friday" },
      { value: "saturday", label: "Saturday" },
    ];

    return (
      <div>
        <Header />
        <div class="filter-form col-sm-4">
          <form class="test">
            <p align="center">find the right program for you</p>
            <hr></hr>
            <div class="form-group">
              <input
                class="form-control"
                type="text"
                id="zipcode"
                placeholder="search by zip code..."
              />
            </div>
            <div class="form-group">
              <input
                class="form-control"
                type="text"
                id="name"
                placeholder="search by name..."
              />
            </div>
            <div class="form-group">
              <Select
                isMulti
                name="meals"
                options={mealOptions}
                closeMenuOnSelect={false}
                hideSelectedOptions={false}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder="meal served"
              />
            </div>
            <div class="form-group">
              <Select
                isMulti
                name="meals"
                options={peopleServed}
                closeMenuOnSelect={false}
                hideSelectedOptions={false}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder="people served"
                closeMenuOnSelect={false}
              />
            </div>
            <div class="form-group">
              <Select
                isMulti
                name="meals"
                options={dayServed}
                closeMenuOnSelect={false}
                hideSelectedOptions={false}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder="day served"
              />
            </div>
            <div class="row justify-content-center">
              <button type="submit" class="go-button" onClick={this.onSubmit}>
                go
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // takes in filter options and sends it back to the server to apply filters to the data
  // this will be done in the GoController
  onSubmit = (event) => {

    // Soham: for debugging purposes 
    const example = {
      zipcode: "98105",
      name: "Pike Market Senior Center",
      mealServed: ["Breakfast"],
      peopleServed: ["OPEN TO ALL"],
      dayServed: ["Monday", "Tuesday", "Wednesday"],
    };
    // SOHAM: Added this for testing since goController has not been made.
    console.log(this.mealProgramModel.filterResults(example));
  };
}

export default FindAMealView;
