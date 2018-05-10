import React, { Component } from 'react';
import { CodeBlock, ThemeContext } from 'preshape';

export default class ComponentCodeBlock extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        { ({ theme }) => (
          <CodeBlock { ...this.props }
              backgroundColor={ theme === 'night' ? 'shade-1' : 'shade-2' }
              color
              padding="x6"
              scrollable
              size="small"
              theme="night" />
        ) }
      </ThemeContext.Consumer>
    );
  }
}
