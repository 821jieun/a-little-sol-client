import React from 'react';
import './LandingPageContent.css';
var wallDrawing46 = require('./images/wallDrawing46.jpg');
var wallDrawing65 = require('./images/wallDrawing65.png');
var wallDrawing579 = require('./images/wallDrawing579.png');
var wallDrawing1112 = require('./images/wallDrawing1112.png');

export default class LandingPageContent extends React.Component {

  render() {
    return (
      <div className="landing-page-content">
      <main role="main">
            <header role="banner">
              <h2>the art of an idea</h2>
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
              <p>Over time, you can create your own gallery of many versions of the same instructions, revealing the beauty in variation of an idea.</p>
            </section>
            <section>
              <header>
                  <h3>Start Drawing Now</h3>
              </header>
              <form className='signup-form'>
                  <div>
                    <label htmlFor="first-name">First name</label>
                    <input placeholder='First Name' type="text" name='first-name' id='first-name' />
                  </div>
                  <div>
                    <label htmlFor="last-name">Last name</label>
                    <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
                  </div>
                  <div>
                    <label htmlFor="username">Email</label>
                    <input type="text" name='username' id='username' />
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='password' />
                  </div>
                  <button type='submit'>Sign Up</button>
              </form>
            </section>
          </main>
      </div>
    )
  }

}
