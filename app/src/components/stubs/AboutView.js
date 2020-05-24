import React, { Component } from 'react';
import { Header } from './HeaderView';
import { UncontrolledCarousel } from 'reactstrap';

class AboutView extends Component {
    constructor() {
      super();
      this.state = {
        images: []
    }
}

componentDidMount() {
    fetch("aboutview.json")
    .then((res) => res.json())
    .then((data) => this.setState({images: data}))
  }

  render() {
    let mealprog = this.state.images;

    let carouselItems = mealprog.map(function(mealprog){
      let obj = { src: mealprog.photo, altText: mealprog.title};
      return obj;
    })

    return (
      <div>
        <Header/>
        <h1 className="about-header">
            Meal Programs for Seattle's Homeless and Low Income
        </h1>

        <p className="about-intro-content">
            Seattle Sustenance connects low-income and homeless citizens of Seattle with free meal services,  alleviating food insecurity and starvation.

        </p>
          
        <div className="about-container">
            <UncontrolledCarousel className="about-caro"
                items={carouselItems} 
                indicators={false}
                controls={true}
            />
        </div>
          
        <ul className="about-content">
        <li>Browse all of the available meal programs in King County</li>
        <p>&nbsp;</p>
        <li>Or, filter through meal programs based on your needs and preferences</li>
        <p>&nbsp;</p>
        <li>Find the right meal program for you, and get directions there</li>
        </ul>

    </div>
    );
  }
}

export default AboutView; 