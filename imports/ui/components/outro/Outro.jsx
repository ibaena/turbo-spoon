import React, { Component } from 'react';

import SideList from '../sidelist/SideList.jsx';

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

      </div>
    );
  }
}
