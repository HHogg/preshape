import React, { Component } from 'react';
import { Icon, ThemeContext } from 'preshape';

export default class ThemeIcon extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        { ({ theme }) => (
          <Icon { ...this.props }
              name={ theme === 'day' ? 'Sun' : 'Moon' } />
        ) }
      </ThemeContext.Consumer>
    );
  }
}
