import React from "react";
'use strict';


const e = React.createElement;



class LikeButton extends React.Component {
  constructor(props:any) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state = { liked : true}) {
      return '|   ❤   |';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      '| Like |'
    );
  }
}







const domContainer = document.querySelector('#like_button_container');
//ReactDOM.render(e(LikeButton), domContainer);

export default LikeButton;
