import React from 'react';
import './LandingPageContent.css';

export default class LandingPageContent extends React.Component {

  render() {
    return (
      <div className="landing-page-content">
      <main role="main">
            <header role="banner">
              <h1>a little sol</h1>
              <h2>the art of an idea</h2>
            </header>
            <section>
              <header>
                  <h3>Explore conceptual art</h3>
              </header>
              <p>[<em>placeholder for image</em>]</p>
              <p>Sol LeWitt's belief in the artist as a generator of ideas was instrumental in the development of Postmodernism and Conceptual art. In 1968, he began conceiving instructions for drawn two-dimensional works of art that left much open to interpretation.</p>
            </section>
            <section>
              <header>
                  <h3>Create</h3>
              </header>
              <p>[<em>placeholder for image of one of instructions</em>]</p>
              <p>Choose one of Sol’s ideas (instructions) to draw your own version.</p>
            </section>
            <section>
              <header>
                  <h3>Save any works that delight you</h3>
              </header>
              <p>[<em>placeholder for screenshot completed work</em>]</p>
              <p>Over time, you can create your own gallery of many versions of the same instructions, revealing the beauty in variation of an idea.</p>
            </section>
            <section>
              <header>
                  <h3>Start Drawing Now</h3>
              </header>
              <form className='signup-form'>
                  <div>
                    <label for="first-name">First name</label>
                    <input placeholder='First Name' type="text" name='first-name' id='first-name' />
                  </div>
                  <div>
                    <label for="last-name">Last name</label>
                    <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
                  </div>
                  <div>
                    <label for="username">Email</label>
                    <input type="text" name='username' id='username' />
                  </div>
                  <div>
                    <label for="password">Password</label>
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
