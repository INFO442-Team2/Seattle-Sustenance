import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import About from './components/stubs/AboutView';
import BrowseAll from './components/stubs/BrowseAllView';
import FindAMeal from './components/stubs/FindAMealView';
import MapView from './components/stubs/MapView';

export class App extends Component {
  render() {
    return(

      <BrowserRouter>

        <Switch>
          {/* if currentUrl == '/about', render <AboutView> */}
          <Route path='/about' component={About} />

          {/* if currentUrl == '/browse', render <BrowseView> */}
          <Route path='/browse' component={BrowseAll}/>

          {/* if currentUrl == '/find', render <FindAMealView> */}
          <Route path='/find' component={FindAMeal}/>
          
          {/* if currentUrl == '/', render <FindAMealView> */}
          <Route path="*" component={FindAMeal}/>
        </Switch>

      </BrowserRouter>

    );
  }
}

export default App;

