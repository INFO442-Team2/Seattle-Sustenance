import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import About from './components/stubs/AboutView';
import BrowseAll from './components/stubs/BrowseAllView';
import FindAMealView from './components/stubs/FindAMealView';
const MEALS_DATA = require("./components/stubs/data/meal_programs.json");
const MEALS_DATA_FEATURES = MEALS_DATA.features;

/* An array of meal objects
meals: [
  {
    properties: {
      Day: [""],
      Time_Start: "",
      Time_End: "",
      Meal_Served: [""],
      Age_Served: "",
      Gender_Served: "",
      People_Served: "",
      Location: "",
      Name_of_Program: "",
    },
    geometry: {
      Type: "Point",
      coordinates: [],
    }
  },
]
*/

export class App extends Component {
  constructor() {
    let meals = MEALS_DATA;
    super();
    this.state = {
      meals: meals,
      filtered: false,
    }
    this.resetResults = this.resetResults.bind(this);
    this.filterResults = this.filterResults.bind(this);
  }

  resetResults() {
    this.setState({
      meals: MEALS_DATA,
      filtered: false,
    })
  }

  // use the user filters to apply to the csv
  filterResults(input) {
    let dataByName = MEALS_DATA_FEATURES.filter((element) => {
      if (input.name !== "") {
        return element.name === input.name;
      }
      return true;
    }); 

    console.log(dataByName)

    let dataByMealServed = []
    if (input.mealsServed !== undefined){
      dataByName.filter((element) => {
        input.mealsServed.forEach((meal) => {
          if(element.properties.Meal_Served.toLowerCase() === meal.toLowerCase()){
            dataByMealServed.push(element)
          }
        })
        return true;
      })
    } else {
      dataByMealServed = dataByName;
    }
    console.log(dataByMealServed)

    let dataByPeopleServed = []
    if (input.Gender_Served !== undefined){
      dataByMealServed.filter((element) => {
        input.peopleServed.forEach((person) => {
          if(element.properties.Gender_Served.toLowerCase() === person.toLowerCase() || element.properties.Gender_Served === "All"){
            dataByPeopleServed.push(element)
          }
        })
        return true;
      })
    } else {
      dataByPeopleServed = dataByMealServed
    }

    console.log(dataByPeopleServed)

    let dataByDayServed = []
    if (input.Gender_Served !== undefined){
      dataByPeopleServed.filter((element) => {
        input.daysServed.forEach((d) => {
          element.properties.Day.forEach(day => {
            if(day.toLowerCase() === d.toLowerCase()){
              dataByDayServed.push(element)
            }
          })
        })
        return true;
      })
    } else {
      dataByDayServed = dataByPeopleServed
    }

    console.log(dataByDayServed)

    this.setState({
      meals: dataByDayServed,
      filtered: true,
    }) 
  }

  render() {
    return(

      <BrowserRouter>

        <Switch>
          {/* if currentUrl == '/about', render <AboutView> */}
          <Route path='/about' component={About} />

          {/* if currentUrl == '/browse', render <BrowseView> */}
          <Route path='/browse' component={BrowseAll}/>

          {/* if currentUrl == '/find', render <FindAMealView> */}
          <Route path='/find' render={(routerProps) => (
            <FindAMealView {...routerProps} meals={this.state.meals} filtered={this.state.filtered} filterResults={this.filterResults}/>
          )}/>
          
          {/* if currentUrl == '/', render <FindAMealView> */}
          <Route path='*' render={(routerProps) => (
            <FindAMealView {...routerProps} meals={this.state.meals} filtered={this.state.filtered} filterResults={this.filterResults}/>
          )}/>
        </Switch>

      </BrowserRouter>

    );
  }
}

export default App;

