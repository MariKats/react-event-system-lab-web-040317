// Code EyesOnMe Component Here

import React from 'react';

export default class EyesOnMe extends React.Component {

  good = () => {
    console.log('Good!')
  }

  eyesOnMe = () => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return(
      <button onFocus={this.good} onBlur={this.eyesOnMe}>Click</button>
    )
  }
}
