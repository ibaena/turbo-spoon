import React, { Component } from 'react';

// Intro component
export default class Nav extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

  componentDidMount(){
    $('.nav-wrapper').hide();
    $('#center-nav').hide();

    let list = $('.menu-list').find('.menu-item');
    let menuImage = $('.menu-list').find('.menu-item').find('.nav-image');
    list.hide();
    menuImage.hide();


    $('.activate-nav').on('click', () => {
      $('.nav-wrapper').toggle('slide',{direction:'up'},700);
      setTimeout( () => {
        $('#center-nav').animate({width:'toggle'},800);
      },800)
      setTimeout( () => {
        list.animate({height:'toggle'},1600);
      },1600)
    });

    list.find('.menu-item-link').on('mouseenter', function() {
      let compare = this.id;

      switch(compare) {
          case 'menu-1':
            list.find('#menu-img-1').show();
              break;
          case 'menu-2':
            list.find('#menu-img-2').show();
              break;
          case 'menu-3':
            list.find('#menu-img-3').show();
              break;
          case 'menu-4':
            list.find('#menu-img-4').show();
              break;
          case 'menu-5':
            list.find('#menu-img-5').show();
              break;
      }
    })
    list.find('.menu-item-link').on('mouseleave', function() {
      let compare = this.id;

      switch(compare) {
          case 'menu-1':
            list.find('#menu-img-1').hide();
              break;
          case 'menu-2':
            list.find('#menu-img-2').hide();
              break;
          case 'menu-3':
            list.find('#menu-img-3').hide();
              break;
          case 'menu-4':
            list.find('#menu-img-4').hide();
              break;
          case 'menu-5':
            list.find('#menu-img-5').hide();
              break;
      }
    })
  }

  getMenu() {
    return [
      { _id: 1, name:'Home',src:' /', image:'/images/intro/ivan-stencil.png' },
      { _id: 2, name:'DownTown Tampa',src:' /downtown', image:'/images/nav/tdpboth.png' },
      { _id: 3, name:'Amloid', src:'/amloid', image:'/images/nav/bothamloid.png' },
      { _id: 4, name:'Feverall', src:'/feverall', image:'/images/nav/fevermac.png'},
      { _id: 5, name:'Wine4Food', src:'/wine4food', image:'/images/nav/wineboth.png' },
    ];
  }

  renderMenu() {
    return this.getMenu().map((item) => (
      <li className="menu-item" key={item._id} >
        <a href={item.src} className="menu-item-link" id={'menu-'+ item._id}>{item.name}</a>
        <img src={item.image} className="nav-image" id={'menu-img-'+ item._id}/>
      </li>
    ))
  }

  render() {
    return (
      <div className="nav-container">
          <div className="activate-nav">X</div>
          <div className="nav-wrapper">
            <ul className="menu-list">
              {this.renderMenu()}
            </ul>
            <hr id="center-nav" />
          </div>
      </div>
    );
  }
}
