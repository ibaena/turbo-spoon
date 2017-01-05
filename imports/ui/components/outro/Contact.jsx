import React, { Component } from 'react';
import anime from 'animejs'


// Contact component
export default class Contact extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  getIcons() {
    return [
      { _id: 1, name:'Twitter', image:'/icons/twitter.png', src:'https://twitter.com/notthefakeib' },
      { _id: 2, name:'Github', image:'/icons/git.png', src:'https://github.com/ibaena' },
      { _id: 3, name:'Facebook', image:'/icons/fbook.png', src:'https://www.facebook.com/profile.php?id=9390215' },
      { _id: 4, name:'Google+', image:'/icons/google.png', src:'https://www.linkedin.com/in/ivanbaena' },
      { _id: 5, name:'Linkedin+', image:'/icons/linkedin.png', src:'https://www.linkedin.com/in/ivanbaena' },

    ];
  }

  renderIcons() {
    return this.getIcons().map((item) => (
      <li className="contact-list-item" key={item._id}>
        <a href={item.src} target="_blank">
          <img src={item.image} className="contact-image grow" id={'contact-img-'+ item._id} />
        </a>
      </li>
    ))
  }
  componentDidMount(){
    $('.square').on('click', function() {
      anime({
        targets: '.square',
        translateX: function() { return anime.random(10, 14) + 'rem'; },
        scale: function() { return anime.random(10,20) / 10; },
        rotate: function() { return anime.random(-360,360); },
        duration: function() { return anime.random(1000,2000); },
        direction: 'alternate',
        loop: false
      });
    });
  }
  render() {
    return (
      <div className="contact-container container">
        <div className="col-md-12 icons-col">
          <div className="col-md-6">
            <h3 className="col-title">Other Projects</h3>
            <div className="blue square"></div>
          </div>
          <div className="col-md-6">
            <h3 className="col-title">Lets Get in Touch</h3>
          </div>
          <ul className="contact-list">
            {this.renderIcons()}
          </ul>
        </div>
      </div>
    );
  }
}
