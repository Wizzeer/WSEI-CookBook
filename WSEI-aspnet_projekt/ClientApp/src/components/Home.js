import React, { Component } from 'react';

import RecipesAll from './RecipesAll' 

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <>
            <h1>Lorem ipsum dolor sit amet!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus purus nunc, nec convallis augue ornare at.</p>
            <RecipesAll />
      </>
    );
  }
}
