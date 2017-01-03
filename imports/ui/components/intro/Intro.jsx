import React, { Component } from 'react';

// Intro component
export default class Intro extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

  componentDidMount(){
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
  }
  render() {
    return (
      <div className="intro-container">
        <div className="intro-overlay"></div>
      </div>
    );
  }
}
