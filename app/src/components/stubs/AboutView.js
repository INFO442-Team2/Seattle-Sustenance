import React, { Component } from "react";
import { Header } from "./HeaderView";
import { UncontrolledCarousel } from "reactstrap";

class AboutView extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    fetch(process.env.PUBLIC_URL + "/aboutview.json")
      .then((res) => res.json())
      .then((data) => this.setState({ images: data }));
  }

  resetResults = () => {
    this.props.resetResults();
  };

  render() {
    let mealprogs = this.state.images;
    let carouselItems = mealprogs.map(function (mealprog) {
      let obj = { src: mealprog.photo, altText: mealprog.title };
      return obj;
    });

    return (
      <div>
        <div>
          <Header resetResults={this.resetResults} />
        </div>

        <div className="about-page">
          <h1 className="about-header" id='main-header'>
            Meal Programs for Seattle's Homeless and Low Income
          </h1>

          <p className="about-intro-content">
            Seattle Sustenance connects low-income and homeless citizens of
            Seattle with free meal services, alleviating food insecurity and
            starvation.
          </p>

          <div className="about-step-container">
            <div className="about-steps">
              <div className="step-number">
                <h1>01</h1>
              </div>
              <div className="step-info">
                <p>Browse all of the available meal programs in King County.</p>
              </div>
            </div>

            <div className="about-steps">
              <div className="step-number">
                <h1>02</h1>
              </div>
              <div className="step-info">
                <p>
                  Filter through meal programs based on your needs and
                  preferences.
                </p>
              </div>
            </div>

            <div className="about-steps">
              <div className="step-number">
                <h1>03</h1>
              </div>
              <div className="step-info">
                <p>
                  Find the right meal program for you, and get directions there.
                </p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h1 className="about-header">Food Insecurities</h1>

            <div className="insec-container">
              <div className="insec-info">
                <p>
                  What makes food insecurity difficult to solve is its
                  underlying causes—poverty, income inequality, and lack of
                  affordable housing.
                </p>

                <p>
                  Consequently, hunger often precedes homelessness because
                  people who are forced to decide between paying for housing or
                  groceries will, more often than not, choose the former. 1 in
                  10 Washington citizens struggle with hunger on a daily basis
                  and we would like to provide a resource that helps them have
                  an equal opportunity to a meal.
                </p>

                <p>
                  For those impacted by hunger, free meal services do exist.
                  However, even these services can prevent certain individuals
                  from receiving a meal. Meal services are not created equal and
                  many come with a set of requirements to get access. These
                  requirements can range from ethnicity to age and might only be
                  available upon arrival to the facility, leaving those that
                  don’t fit the requirements to continue looking for a meal.
                </p>
              </div>

              <div className="insec-carousel">
                <UncontrolledCarousel
                  className="about-caro"
                  items={carouselItems}
                  indicators={false}
                  controls={true}
                />
              </div>
            </div>
          </div>
          <div className="about-section">
            <h1 className="about-header">About the Team</h1>

            <div className="about-card-container container mx-auto">
              <div className="row mx-auto">
                <div className="team-card col-8 col-sm-8 col-md-5 col-lg-3 col-xl-3 mx-auto p-2">
                  <div className="card-photo" id="kaitlyn-photo"></div>

                  <h2>Kaitlyn Cameron</h2>

                  <p>
                    Hi, my name is Kaitlyn Cameron and I’m a graduating senior
                    at the University of Washington. During my time at school, I
                    studied Informatics with a focus in Human-Computer
                    Interaction. I love spending time with my friends, taking
                    road trips and being outdoors.
                  </p>
                </div>

                <div className="team-card col-8 col-sm-8 col-md-5 col-lg-3 col-xl-3 mx-auto p-2">
                  <div className="card-photo" id="kevin-photo"></div>

                  <h2>Kevin Nguyen</h2>

                  <p>
                    I'm Kevin, and I am a graduating Informatics senior, with a
                    concentration of Data Science and Human-Computer
                    Interaction. In the future, I hope to create accesible
                    software, or bring value to data. During my summers, I love
                    exploring places I haven't been to before.
                  </p>
                </div>

                <div className="team-card col-8 col-sm-8 col-md-5 col-lg-3 col-xl-3 mx-auto p-2">
                  <div className="card-photo" id="rachel-photo"></div>

                  <h2>Rachel Vuu</h2>

                  <p>
                    Hi! I’m Rachel, a graduating senior studying Informatics at
                    the University of Washington. I am passionate about software
                    engineering and bridging the gap between people,
                    information, and technology. In my spare time, I enjoy
                    attending festivals and finding new places to eat.
                  </p>
                </div>
              </div>
              <div className="row mx-auto">
                <div className="team-card col-8 col-sm-8 col-md-5 col-lg-5 col-xl-5 mx-auto">
                  <div className="card-photo" id="robert-photo"></div>

                  <h2>Robert G</h2>

                  <p>
                    Hi, my name is Robert Goertz and I’m a graduating senior
                    studying Informatics - HCI at the University of Washington.
                    I’m passionate about crafting great user experiences and in
                    my spare time I enjoy Motorsports and traveling.
                  </p>
                </div>
                <div className="team-card col-8 col-sm-8 col-md-5 col-lg-5 col-xl-5 mx-auto">
                  <div className="card-photo" id="soham-photo"></div>

                  <h2>Soham Hinduja</h2>

                  <p>
                    Soham is a graduating senior studying Informatics at the
                    University of Washington with a specilization in HCI. He
                    aims to be a UX Designer going into the industry as he is
                    fascinated by the intersection of creativity and technology
                    of this field.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutView;