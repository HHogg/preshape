import React, { Component } from 'react';

export default class RadioButtonIndicator extends Component {
  render() {
    return (
      <div className="RadioButton">
        <input { ...this.props }
            className="RadioButton__input"
            type="radio" />
        <div className="RadioButton__indicator" />
      </div>
    );
  }
}
