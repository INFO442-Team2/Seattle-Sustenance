import React, { Component } from "react";
import { Card } from "reactstrap";
import Select from "react-select";
import { Header } from "./HeaderView";
import MapView from "./MapView";
import WarningAlert from "./Alert";


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

  resetResults = () => {
    this.props.resetResults()
  }

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
      { value: "youth", label: "Youth" },
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
    let main = null;
    let noResults;
    if (this.props.filtered === true && this.props.meals.length === 0) {
      noResults = <WarningAlert/>
    }

    if (this.props.filtered === false || (this.props.submit === true && this.props.meals.length === 0)) {
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
            <div className="form-group my-cards scrollbar scrollbar-primary">
            <div className="card-container">
                {meals.map((card, i) => {
                return (
                    <Card>
                    <p className="program-name">{meals[i].properties["Name_of_Program"]}</p>
                    <p className="people-served">{meals[i].properties["People_Served"]}</p>
                    <p className="days-served">Days Served: {meals[i].properties["Days"]}</p>
                    <p className="meal-served">{meals[i].properties["Meal_Served"]}: {meals[i].properties["Time_Start"]}-
                        {meals[i].properties["Time_End"]}</p>
                    <p className="location-served">{meals[i].properties["Location"] + " " + meals[i].properties["Zipcode"]}</p>
                    </Card>
                );
                })}
                </div>
            </div>
      );
    }

    return (
      <div>
        <Header resetResults={this.resetResults}/>
        {noResults}
        <div className="container">
          <div className="row">
            <div className="filter-form col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              {main}
            </div>
            <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 filter-form">
              <MapView meals={this.props.meals}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FindAMealView;
