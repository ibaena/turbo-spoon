import React, { Component } from 'react';

// Intro component
export default class Selector extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

  componentDidMount(){
    let pageCount = 1
    let current = $('.page-nav-list').find('.page-nav-item').find('.selector').val();
    $('input[type=radio]').on('change', function(){
      console.log(this.value);
    });

    $(window).bind('mousewheel', function(e){

        if(e.originalEvent.wheelDelta /120 > 0) {

            pageCount = pageCount - 1;
            if (pageCount < 1 ) {
              pageCount = 1;
            };
            if(pageCount = 1){
            }
        }
        else{
            pageCount = pageCount +1;
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
