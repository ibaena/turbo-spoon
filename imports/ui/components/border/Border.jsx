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
      <div className="border-container">
          <div className="btn-slide-dn">SLide</div>
      </div>
    );
  }
}
