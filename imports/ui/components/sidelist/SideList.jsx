import React, { Component } from 'react';

// Intro component
export default class SideList extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

  componentDidMount(){
    $('.side-list-item').hide();
    setTimeout( () => {
      $('.side-list-item').animate({height:'toggle'},800);
    },1400);
  }
  render() {
    return (
      <div className="sidelist-container">
        <ul className="side-list">
          <li className="side-list-item" id="side-1">Ivan Baena</li>
          <li className="side-list-item" id="side-2">Front End Developer</li>
          <li className="side-list-item" id="side-3">Pennsylvania &nbsp;&nbsp;-->&nbsp;&nbsp; New Jersey &nbsp;&nbsp;-->&nbsp;&nbsp; New York</li>
        </ul>
      </div>
    );
  }
}
