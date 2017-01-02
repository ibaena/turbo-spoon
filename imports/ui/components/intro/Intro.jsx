import React, { Component } from 'react';

// Intro component
export default class Intro extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

  componentDidMount(){
    $('.btn-slide').on('click', () => {
      $('.intro-container').hide('slide',{direction:'up'},600);
    });
  }
  render() {
    return (
      <div className="intro-container">
        <div className="intro-overlay"></div>
          <div className="btn-slide">SLide</div>
      </div>
    );
  }
}
