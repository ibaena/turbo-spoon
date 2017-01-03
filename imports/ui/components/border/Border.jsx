import React, { Component } from 'react';

// Intro component
export default class Border extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){
    $('.btn-slide-dn').on('click', () => {
      $('.intro-container').show('slide',{direction:'up'},600);
    });
  }
  render() {
    return (
      <div className="border-container container">
          <div id="project-border">
          <div className="title-box"><p>text</p></div>
            <div className="col-md-12">
              Ivan
            </div>
            <div className="launch-box"><p>text</p></div>
            <div className="nav-box"><p>Nav</p></div>
          </div>
      </div>
    );
  }
}
