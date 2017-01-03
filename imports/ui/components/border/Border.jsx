import React, { Component } from 'react';

import Selector from './Selector.jsx';

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

  getProjects() {
    return [
      { _id: 1, name:'DownTown Tampa',src:' /downtown', image:'/images/nav/tdpboth.png', role:'Google API Developer', agency: 'Vision Creative Group', year:'2016', info:'Where to Start - With so many options for things to do in Tampa\'s Downtown, the challenge is not deciding where to go, it\'s deciding where to start.' },
      { _id: 2, name:'Amloid', src:'/amloid', image:'/images/nav/bothamloid.png', role:'Web Developer', agency: 'Vision Creative Group', year:'2016', info:'Amloid proudly brings 100 years of unwavering commitment to its founder’s vision: to create quality, affordable, and fun toys. Innovative design and exacting attention to detail continue to produce unique product lines that have delighted generations of children around the world.'},
      { _id: 3, name:'Feverall', src:'/feverall', image:'/images/nav/fevermac.png', role:'Web Developer', agency: 'Vision Creative Group', year:'2016', info:'FeverAll® is a suppository form of acetaminophen, the common fever remedy known and trusted by pediatricians. Available in 3 strengths for infants or children of different ages, FeverAll® suppositories provide an effective dosing alternative for children who won’t or can’t take medication orally'},
      { _id: 4, name:'Wine4Food', src:'/wine4food', image:'/images/nav/wineboth.png', role:'Front End Developer', agency: 'Vision Creative Group', year:'2016', info:'Wine4Food is the number one destination for everything Wine & Food Related. Wine Tastings & Wine Dinner Party Ideas to Food & Wine Pairings and Recipes.' },
    ];
  }

  renderProjects() {
    return this.getProjects().map((item) => (
      <div id="project-border" key={item._id}>
      <div className="title-box"><p>{item.name}</p></div>
        <div className="col-md-12">
          Ivan
        </div>
        <div className="launch-box"><p>{item.name}</p></div>
      </div>
    ))
  }

  render() {
    return (
      <div className="border-container container">
        {this.renderProjects()}
        <div className="nav-box">
          <Selector />
        </div>
      </div>
    );
  }
}
