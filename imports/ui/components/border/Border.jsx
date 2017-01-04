import React, { Component } from 'react';

import Selector from './Selector.jsx';

// Intro component
export default class Border extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){
    $('.border-container').find('.project-border').find('.title-box').hide();
    $('.border-container').find('.project-border').find('.project-title').hide();
    $('.border-container').find('.project-border').find('.project-description').hide();
    $('.border-container').find('.project-border').find('.project-image').hide();
    $('.border-container').find('.project-border').find('.launch-box').hide();
    $('.role-wrapper').find('.role-list').hide();
    $('.role-title').hide();
  }

  getProjects() {
    return [
      { _id: 1, name:'DownTown Tampa',src:' /downtown', image:'/images/nav/tdpboth.png', role:'Google API Developer', agency: 'Vision Creative Group', year:'2016', info:'Where to Start - With so many options for things to do in Tampa\'s Downtown, the challenge is not deciding where to go, it\'s deciding where to start.' },
      { _id: 2, name:'Amloid', src:'/amloid', image:'/images/nav/bothamloid.png', role:'Web Developer', agency: 'Vision Creative Group', year:'2016', info:'Amloid proudly brings 100 years of unwavering commitment to its founder’s vision: to create quality, affordable, and fun toys. Innovative design and exacting attention to detail continue to produce unique product lines that have delighted generations of children around the world.'},
      { _id: 3, name:'Feverall', src:'/feverall', image:'/images/nav/fevermac.png', role:'Web Developer', agency: 'Vision Creative Group', year:'2016', info:'FeverAll® is a suppository form of acetaminophen, the common fever remedy known and trusted by pediatricians. Available in 3 strengths for infants or children of different ages, FeverAll® suppositories provide an effective dosing alternative for children who won’t or can’t take medication orally'},
      { _id: 4, name:'Wine4Food', src:'/wine4food', image:'/images/nav/wineboth-new.png', role:'Front End Developer', agency: 'Vision Creative Group', year:'2016', info:'Wine4Food is the number one destination for everything Wine & Food Related. Wine Tastings & Wine Dinner Party Ideas to Food & Wine Pairings and Recipes.' },
    ];
  }

  renderProjects() {
    return this.getProjects().map((item) => (
        <div key={item._id}>
          <div className="title-box" id={"header-"+item._id}><p  className="project-header">{item.name}</p></div>
            <div className="col-md-12 media">
              <div className="col-md-5 col-md-offset-1">
                <h1 className="project-title" id={"title-"+item._id}>{item.name}</h1>
                <p className="project-description" id={"description-"+item._id}>
                  {item.info}
                </p>
              </div>
              <div className="col-md-6 img-wrapper">
                <img src={item.image} className="project-image" id={"image-"+item._id}/>
              </div>
            </div>
            <div className="launch-box" id={"launch-"+item._id}><p className="project-launch">{item.name}</p></div>
        </div>
    ))
  }

  renderRoles() {
    return this.getProjects().map((item) => (

      <ul className="role-list" id={'role-list-'+item._id} key={item._id}>
        <li className="role-list-item" >
          <span className="role-header">Role <br /></span>
            {item.role}
        </li>
        <li className="role-list-item" >
          <span className="role-header">Agency <br /></span>
            {item.agency}
        </li>
        <li className="role-list-item" >
          <span className="role-header">Year <br /></span>
            {item.year}
        </li>
      </ul>
    ))
  }

  render() {
    return (
      <div className="border-container container">
        <div className="project-border">
          {this.renderProjects()}
          <div className="role-wrapper">
            <h2 className="role-title">Role</h2>
            {this.renderRoles()}
          </div>
        </div>
        <div className="nav-box">
          <Selector />
        </div>
      </div>
    );
  }
}
