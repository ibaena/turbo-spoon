import React, { Component } from 'react';

// Intro component
export default class Selector extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

  componentDidMount(){
    let headerHide = $('.border-container').find('.project-border').find('.title-box');
    let titleHide = $('.border-container').find('.project-border').find('.project-title');
    let descriptionHide = $('.border-container').find('.project-border').find('.project-description');
    let imageHide = $('.border-container').find('.project-border').find('.project-image');
    let launchHide = $('.border-container').find('.project-border').find('.launch-box');
    let roleHide = $('.role-wrapper').find('.role-list');
    let roleTitle = $('.role-title');

    let release = 800;
    let initial = 600;

    let base = $('.border-container').find('.project-border');
    let pageCount = 1
    let i = 0;

    $('input[type=radio]').on('change', function(){
      do {
          headerHide.hide('slide', {direction:'up'},500);
          titleHide.hide('slide', {direction:'up'},500);
          descriptionHide.hide('slide', {direction:'down'},500);
          imageHide.hide('slide', {direction:'right'},600);
          launchHide.hide('slide', {direction:'down'},500);
          roleHide.hide('slide', {direction:'left'},600);
          roleTitle.hide('slide', {direction:'up'},600);
          $('.outro-container').hide('slide',{direction:'down'},600);
          $('.nav-box').removeClass('outro-nav');
          $('.fancy-menu').find('span').css({
            'background-color':'black',
          });
          i++;
        }
      while (i < 1);

  let userSel = this.value;
  switch(userSel) {
    case '1':

    $('.intro-container').show('slide',{direction:'up'},600);
    $('.fancy-menu').find('span').css({
      'background-color':'white',
    });
        break;

    case '2':
    setTimeout( () => {
      base.find('#header-1').show('slide', {direction:'up'},400);
      base.find('#launch-1').show('slide', {direction:'down'},400);
    },800);
    setTimeout( () => {
      base.find('#title-1').show('slide', {direction:'up'},800);
      base.find('#description-1').show('slide', {direction:'down'},800);

      base.find('#image-1').show('slide', {direction:'right'},800);
      $('.role-wrapper').find('#role-list-1').show('slide', {direction:'left'},800);
      roleTitle.show('slide', {direction:'up'},800);
    },1000);
        break;

    case '3':
    setTimeout( () => {
      base.find('#header-2').show('slide', {direction:'up'},400);
      base.find('#launch-2').show('slide', {direction:'down'},400);
    },800);
    setTimeout( () => {
      base.find('#title-2').show('slide', {direction:'up'},800);
      base.find('#description-2').show('slide', {direction:'down'},800);

      base.find('#image-2').show('slide', {direction:'right'},800);
      $('.role-wrapper').find('#role-list-2').show('slide', {direction:'left'},800);
      roleTitle.show('slide', {direction:'up'},800);
    },1000);
        break;

    case '4':
    setTimeout( () => {
      base.find('#header-3').show('slide', {direction:'up'},800);
      base.find('#launch-3').show('slide', {direction:'down'},400);
    },800);
    setTimeout( () => {
      base.find('#title-3').show('slide', {direction:'up'},800);
      base.find('#description-3').show('slide', {direction:'down'},800);

      base.find('#image-3').show('slide', {direction:'right'},800);
      $('.role-wrapper').find('#role-list-3').show('slide', {direction:'left'},800);
      roleTitle.show('slide', {direction:'up'},800);
    },1000);
        break;

    case '5':
    setTimeout( () => {
      base.find('#header-4').show('slide', {direction:'up'},400);
      base.find('#launch-4').show('slide', {direction:'down'},400);
    },800);
    setTimeout( () => {
      base.find('#title-4').show('slide', {direction:'up'},800);
      base.find('#description-4').show('slide', {direction:'down'},800);

      base.find('#image-4').show('slide', {direction:'right'},800);
      $('.role-wrapper').find('#role-list-4').show('slide', {direction:'left'},800);
      roleTitle.show('slide', {direction:'up'},800);
    },1000);
        break;

    case '6':
        $('.outro-container').show('slide',{direction:'down'},800);
        $('.nav-box').addClass('outro-nav');
        $('.fancy-menu').find('span').css({
          'background-color':'white',
        });
        break;

    }
  });
}

  getPage() {
    return [
      { _id: 1, page:1, name:'Home' },
      { _id: 2, page:2, name:'DownTown Tampa' },
      { _id: 3, page:3, name:'Amloid' },
      { _id: 4, page:4, name:'Feverall' },
      { _id: 5, page:5, name:'Wine4Food' },
      { _id: 6, page:6, name:'Contact' },
    ];
  }

  renderPage() {
    return this.getPage().map((item) => (
      <li key={item._id} className="page-nav-item">
        <input type="radio" ref="page" name="page" value={item.page}  className="selector" id={'selector-'+item.page}/>
      </li>
    ))
  }

  render() {
    return (
      <div className="selector-container">
        <ul className="page-nav-list">
          {this.renderPage()}
        </ul>
      </div>
    );
  }
}
