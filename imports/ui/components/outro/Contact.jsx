import React, { Component } from 'react';


// Contact component
export default class Contact extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

  componentDidMount(){
  }
  render() {
    return (
      <div className="contact-container">
          <ul className="contact-list">
            <li className="contact-list-item">Social #1</li>
            <li className="contact-list-item">Social #2</li>
            <li className="contact-list-item">Social #3</li>
          </ul>
      </div>
    );
  }
}
