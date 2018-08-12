import React, { Component } from 'react';

export default class CheckboxIndicator extends Component {
  render() {
    return (
      <div className="CheckBox">
        <input { ...this.props }
            className="CheckBox__input"
            type="checkbox" />
        <div className="CheckBox__indicator" />
      </div>
    );
  }
}
