import React, { Component } from 'react';

import Contact from './Contact.jsx';

// Intro component
export default class Outro extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

  componentDidMount(){
    $('.outro-container').hide();
  }
  render() {
    return (
      <div className="outro-container">

        <video loop muted ="img/videoframe.jpg" className="fw-video">
          <source src="videos/city.mp4" type="video/mp4" />
        </video>

        <div className="outro-overlay"></div>
        <hr id="outro-single" />
        <div className="outro-border">
            <Contact />
        </div>
      </div>
    );
  }
}
