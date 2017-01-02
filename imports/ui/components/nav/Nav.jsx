import React, { Component } from 'react';

// Intro component
export default class Nav extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

  componentDidMount(){
    $('.nav-wrapper').hide();
    $('.activate-nav').on('click', () => {
      $('.nav-wrapper').toggle('slide',{direction:'up'},500);
    });
  }
  render() {
    return (
      <div className="nav-container">
          <div className="activate-nav">X</div>
          <div className="nav-wrapper"></div>
      </div>
    );
  }
}
