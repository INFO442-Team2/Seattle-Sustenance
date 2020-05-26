//Soham: Shouldnt the GoController not be extending a component 
//       as its a controller and not a physical component ?

class GoController extends Component {
  constructor() {
    super()
    this.state = {
      meals: [],
      filteredMeals: []
    }
  }

  componentWillMount() {
    this.setState({
      meals,
      filteredMeals: meals
    })
  }

filterMeals = (mealFilter) => {
    let filteredMeals = this.state.meals
    filteredMeals = filteredMeals.filter((meals) => {
      let mealType = meals.mealServed
      //return mealServed?
    })
    this.setState({
      filteredMeals
    })
  }


    // returns image
    updateDate = (fromSettings) => {

    }

    // after updating data, show the results onto the "Filtered" results view
    showFilteredResults = (this.state.filteredMeals) => {

    }

}

export default GoController; 
