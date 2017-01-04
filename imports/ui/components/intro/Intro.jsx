import React, { Component } from 'react';

import SideList from '../sidelist/SideList.jsx';

// Intro component
export default class Intro extends Component {
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

    $('.page-nav-list').find('#selector-2').prop('checked', true);
    let base = $('.border-container').find('.project-border');

    $('#intro-para').hide();
    let page = 1

    $(window).bind('mousewheel', function(e){

        if(e.originalEvent.wheelDelta /120 > 0) {
            page = page - 1;
            if (page < 1 ) {
              page = 1;
            };

            if(page = 1){
              $('.intro-container').show('slide',{direction:'up'},600);
              $('.fancy-menu').find('span').css({
                'background-color':'white',
              });


              headerHide.hide('slide', {direction:'up'},600);
              titleHide.hide('slide', {direction:'up'},600);
              descriptionHide.hide('slide', {direction:'down'},600);
              imageHide.hide('slide', {direction:'right'},600);
              launchHide.hide('slide', {direction:'down'},500);
              roleHide.hide('slide', {direction:'left'},600);
              roleTitle.hide('slide', {direction:'up'},600);
              $('.outro-container').hide('slide',{direction:'down'},600);
              $('.nav-box').removeClass('outro-nav');
            }
        }
        else{
            $('.intro-container').hide('slide',{direction:'up'},600);
            $('.fancy-menu').find('span').css({
              'background-color':'black',
            });
              $('.page-nav-list').find('#selector-2').prop('checked', true);

            setTimeout( () => {
              base.find('#header-1').show('slide', {direction:'up'},600);
              base.find('#launch-1').show('slide', {direction:'down'},600);
            },800);
            setTimeout( () => {
              base.find('#title-1').show('slide', {direction:'up'},800);
              base.find('#description-1').show('slide', {direction:'down'},800);

              base.find('#image-1').show('slide', {direction:'right'},800);
              $('.role-wrapper').find('#role-list-1').show('slide', {direction:'left'},800);
              roleTitle.show('slide', {direction:'up'},800);
            },1000);


            page = page +1;
        }
    });

    setTimeout( () => {
      $('#intro-para').animate({height:'toggle'},800);
    },600);


  }
  render() {
    return (
      <div className="intro-container">
      <SideList />
        <div className="intro-overlay"></div>
        <div className="container" id="intro-text">
          <div className="col-sm-9 col-sm-offset-3" id="intro-para">
            <div id="section-1">
              <p className="intro-one-text">
              <span className="highlight-text">I’M A WEB DEVELOPER &nbsp;&nbsp;</span>
                from Pennsylvania living in Hoboken, New Jesery, where I work as a Front End Developer at Vision Creative Group. With web development, my strength lies in the Front End of website and app development.
              </p>
            </div>
            <div id="section-2">
              <p className="intro-two-text">If you want to know more about me, my work or if youʼre an Elder Scrolls Skyrim or want to talk Knicks basketball, feel free to contact me on ivan.baena04 [at] gmail.com.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
