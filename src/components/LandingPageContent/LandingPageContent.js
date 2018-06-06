import React from 'react';
import './LandingPageContent.css';
import RegisterForm from '../RegisterForm/RegisterForm';
var wallDrawing46 = require('./images/wallDrawing46.jpg');
var wallDrawing65 = require('./images/wallDrawing65.png');
var wallDrawing1112 = require('./images/wallDrawing1112.png');

export default class LandingPageContent extends React.Component {

  render() {
    return (
      <div className="landing-page-content">
      <main role="main">
            <header role="banner">
              <p>"The idea becomes a machine that makes the art." -Sol LeWitt (1965)</p>
            </header>
            <section>
              <header>
                  <h3>Explore conceptual art</h3>
              </header>
              <img src={wallDrawing46} alt="sol le witt's wall drawing #46"/>
              <p>Sol LeWitt's belief in the artist as a generator of ideas was instrumental in the development of Postmodernism and Conceptual art. In 1968, he began conceiving instructions for drawn two-dimensional works of art that left much open to interpretation.</p>
            </section>
            <section>
              <header>
                  <h3>Create</h3>
              </header>
                <img src={wallDrawing65} alt="sol le witt's wall drawing #65"/>
              <p>Choose one of Sol’s ideas (instructions) to draw your own version.</p>
            </section>
            <section>
              <header>
                  <h3>Save any works that delight you</h3>
              </header>
              <img src={wallDrawing1112} alt="sol le witt's wall drawing #1112"/>
              <p>Over time, you can create your own gallery, cultivating your own variations on a theme.</p>
            </section>
            <section>
              <header>
                  <h3>Start Drawing Now</h3>
              </header>
      
              <RegisterForm />
            </section>
          </main>
      </div>
    )
  }

}
