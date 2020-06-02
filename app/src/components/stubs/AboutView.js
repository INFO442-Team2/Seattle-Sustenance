import React, { Component } from 'react';
import { Header } from './HeaderView';
import { UncontrolledCarousel } from 'reactstrap';

class AboutView extends Component {
  constructor(props) {
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

  resetResults = () => {
    this.props.resetResults()
  }

  render() {
    let mealprogs = this.state.images;

    let carouselItems = mealprogs.map(function(mealprog){
      let obj = { src: mealprog.photo, altText: mealprog.title};
      return obj;
    })

    return (
      <div>
        <div>
          <Header resetResults={this.resetResults}/>
        </div>

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

        <div className="about-content">
          <p>Browse all of the available meal programs in King County.</p>
          {/* <p>&nbsp;</p> */}
          <p>Or, filter through meal programs based on your needs and preferences.</p>
          {/* <p>&nbsp;</p> */}
          <p>Find the right meal program for you, and get directions there.</p>
        </div>

    </div>
    );
  }
}

export default AboutView;