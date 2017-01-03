import React, { Component } from 'react';

import SideList from '../sidelist/SideList.jsx';

// Intro component
export default class Intro extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

  componentDidMount(){
    $('#intro-para').hide();
    let page = 1
    $(window).bind('mousewheel', function(e){

        if(e.originalEvent.wheelDelta /120 > 0) {
            $('.intro-container').show('slide',{direction:'up'},600);
            page = page - 1;
            if (page < 1 ) {
              page = 1;
            };
        }
        else{
            $('.intro-container').hide('slide',{direction:'up'},600);
            page = page +1;
        }
    });

    setTimeout( () => {
      $('#intro-para').animate({height:'toggle'},1100);
    },400);


  }
  render() {
    return (
      <div className="intro-container">
      <SideList />
        <div className="intro-overlay"></div>
        <div className="container" id="intro-text">
          <div className="col-sm-8 col-sm-offset-4" id="intro-para">
            <div id="section-1">
              <p className="intro-one-text">
              <span className="highlight-text">I’M A WEB DEVELOPER </span>
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
