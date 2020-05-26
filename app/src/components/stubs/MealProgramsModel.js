const MEALS_DATA = require("./data/meal_programs.json");
const MEALS_DATA_FEATURES = MEALS_DATA.features;

class MealProgramsModel {
  // use the user filters to apply to the csv
  filterResults(input) {
    let zipCode = input.zipCode || "";
    let name = input.name || "";
    let mealServed = input.mealServed || [];
    let peopleServed = input.peopleServed || [];
    let dayServed = input.dayServed || [];

    let dataByName = MEALS_DATA_FEATURES.filter((element) => {
      if (name) {
        if (element.name === name) {
          return true;
        }
      }
      return true;
    });

    let dataByMealServed = mealServed.forEach((meal) => {
      let data = dataByName.filter((element) => {
        if (element.Meal_Served === meal) {
          return true;
        }
        return false;
      });
      return data;
    });

    let dataByPeopleServed = peopleServed.forEach((people) => {
      let data = dataByMealServed.filter((element) => {
        if (element.People_Served === people) {
          return true;
        }
        return false;
      });
      return data;
    });

    let dataByDayServed = dayServed.forEach((day) => {
        let data = dataByPeopleServed.filter((element) => {
            if (element.Day.contains(day)) {
                return true; 
            }
            return false;
        }); 
        return data;
    });

    console.log(dataByDayServed);
    return dataByDayServed; 
  }
}

export default MealProgramsModel;

