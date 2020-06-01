import React, { Component } from "react";
import { Card } from "reactstrap";
import Select from "react-select";
import { Header } from "./HeaderView";
import MapView from "./MapView";


class FindAMealView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: "",
      name: "",
      mealsServed: [],
      peopleServed: [],
      daysServed: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.zipcode.value)
    console.log(e.target.name.value)

    let mOptions = e.target.mealsServed;
    let mealsSelected = [];
    if (mOptions.value) {
      mealsSelected.push(mOptions.value)
    } else if (typeof mOptions !== 'undefined') {
      for (let i = 0, len = mOptions.length; i < len; i++) {
        mealsSelected.push(mOptions[i].defaultValue);
      }
    }  

    let pOptions = e.target.peopleServed;
    let peopleSelected = [];
    if (pOptions.value) {
      peopleSelected.push(pOptions.value)
    } else if (typeof pOptions !== 'undefined') {
      for (let i = 0, len = pOptions.length; i < len; i++) {
        peopleSelected.push(pOptions[i].defaultValue);
      }
    }

    let dOptions = e.target.daysServed;
    let daysSelected = [];
    if (dOptions.value) {
      daysSelected.push(dOptions.value)
    } else if (typeof dOptions !== 'undefined') {
      for (let i = 0, len = dOptions.length; i < len; i++) {
        daysSelected.push(dOptions[i].defaultValue);
      }
    } 

    console.log(mealsSelected)
    console.log(peopleSelected)
    console.log(daysSelected)

    this.setState({
      zipcode: e.target.zipcode.value,
      name: e.target.name.value,
      mealsServed: mealsSelected,
      peopleServed: peopleSelected,
      daysServed: daysSelected,
    }, () => this.props.filterResults(this.state))
  };

  render() {
    let mealOptions = [
      { value: "breakfast", label: "Breakfast" },
      { value: "lunch", label: "Lunch" },
      { value: "dinner", label: "Dinner" },
      { value: "snack", label: "Snack" },
      { value: "any", label: "Any" },
    ];

    let peopleOptions = [
      { value: "women", label: "Women" },
      { value: "men", label: "Men" },
      { value: "children", label: "Children" },
      { value: "any", label: "Any" },
    ];

    let dayOptions = [
      { value: "sunday", label: "Sunday" },
      { value: "monday", label: "Monday" },
      { value: "tuesday", label: "Tuesday" },
      { value: "wednesday", label: "Wednesday" },
      { value: "thursday", label: "Thursday" },
      { value: "friday", label: "Friday" },
      { value: "saturday", label: "Saturday" },
      { value: "any", label: "Any" },
    ];

    let meals = this.props.meals;
    /* let meals = [
      {
        properties: {
          Day: ["Monday", "Tuesday"],
          Time_Start: "6:15AM",
          Time_End: "7:00AM",
          Meal_Served: ["Breakfast"],
          Age_Served: "All",
          Gender_Served: "All",
          People_Served: "Open to all",
          Location: "2515 Western Ave., Seattle",
          Name_of_Program: "Millionair Club Charity",
        },
        geometry: {
          Type: "Point",
          coordinates: [47.610471, -122.35034099999],
        },
      },
      {
        properties: {
          Day: ["Monday", "Tuesday"],
          Time_Start: "6:15AM",
          Time_End: "9234",
          Meal_Served: ["Breakfast"],
          Age_Served: "All",
          Gender_Served: "All",
          People_Served: "Open to all",
          Location: "2515 Western Ave., Seattle",
          Name_of_Program: "Millionair Club Charity",
        },
        geometry: {
          Type: "Point",
          coordinates: [47.610471, -122.35034099999],
        },
      },
    ]; */

    let main = null;

    if (this.props.filtered === false) {
      main = (
        <form className="test" onSubmit={this.handleSubmit}>
          <p align="center">find the right program for you</p>
          <hr></hr>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="zipcode"
              placeholder="search by zip code..."
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="search by name..."
            />
          </div>
          <div className="form-group">
            <Select
              isMulti
              name="mealsServed"
              options={mealOptions}
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              className="basic-multi-select"
              classNamePrefix="select"
              placeholder="meal served"
            />
          </div>
          <div className="form-group">
            <Select
              isMulti
              name="peopleServed"
              options={peopleOptions}
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              className="basic-multi-select"
              classNamePrefix="select"
              placeholder="people served"
            />
          </div>
          <div className="form-group">
            <Select
              isMulti
              name="daysServed"
              options={dayOptions}
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              className="basic-multi-select"
              classNamePrefix="select"
              placeholder="day served"
            />
          </div>
          <div className="row justify-content-center">
            <button type="submit" className="go-button" onSubmit={this.handleSubmit}>
              go
            </button>
          </div>
        </form>
      );
    } else {
      main = (
        <div className="form-group my-cards">
          <div className="card-container">
            {meals.map((card, i) => {
              return (
                <Card>
                  <p>{meals[i].properties["Name_of_Program"]}</p>
                  <p>{meals[i].properties["People_Served"]}</p>
                  <p>{meals[i].properties["Meal_Served"]}</p>
                  <p>
                    {meals[i].properties["Time_Start"]}-
                    {meals[i].properties["Time_End"]}
                  </p>
                  <p>{meals[i].properties["Days"]}</p>
                  <p>{meals[i].properties["Location"]}</p>
                </Card>
              );
            })}
          </div>
        </div>
      );
    }

    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="filter-form col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              {main}
            </div>
            <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 filter-form">
              <MapView/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FindAMealView;
