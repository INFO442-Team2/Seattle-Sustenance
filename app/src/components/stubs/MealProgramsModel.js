const MEALS_DATA = require("./data/meal_programs.json");
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

  // use the user filters to apply to the csv
  function filterResults(input) {
    let zipCode = input.zipCode || "";
    let name = input.name || "";
    let mealServed = ["Breakfast", "Lunch"];
    let peopleServed = ["Women"];
    let dayServed = ['Monday', 'Sunday'];

    let dataByName = MEALS_DATA_FEATURES.filter((element) => {
      if (name !== "") {
        return element.name === name;
      }
      return true;
    }); 

    let dataByMealServed = []
    dataByName.filter((element) => {
      mealServed.forEach((meal) => {
        if(element.properties.Meal_Served === meal){
          dataByMealServed.push(element)
        }
      })
    })

    let dataByPeopleServed = []
    dataByMealServed.filter((element) => {
      peopleServed.forEach((person) => {
        if(element.properties.Gender_Served === person || element.properties.Gender_Served === "All"){
          dataByPeopleServed.push(element)
        }
      })
    })

    let dataByDayServed = []
    dataByPeopleServed.filter((element) => {
      dayServed.forEach((d) => {
        element.properties.Day.forEach(day => {
          if(day === d){
            dataByDayServed.push(element)
          }
        })
      })
    })

    return dataByDayServed; 
  }

function MealProgramsModel(props) {
  filterResults(props)

}

export default MealProgramsModel;

