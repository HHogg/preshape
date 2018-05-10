import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SelectInputLabel from '../SelectInputLabel/SelectInputLabel';
import './CheckBox.css';

export default class CheckBox extends Component {
  static propTypes = {
    /** A styled disabled state that disables all interactions */
    disabled: PropTypes.bool,
    /** A label that gives describes what the input is for */
    label: PropTypes.string.isRequired,
    /** SKIP */
    margin: PropTypes.string,
    /** SKIP */
    padding: PropTypes.string,
    /** SKIP */
    paddingHorizontal: PropTypes.string,
    /** SKIP */
    paddingVertical: PropTypes.string,
  };

  static defaultProps = {
    paddingHorizontal: 'x3',
    paddingVertical: 'x2',
  };

  render() {
    const {
      disabled,
      label,
      margin,
      padding,
      paddingHorizontal,
      paddingVertical,
      ...rest
    } = this.props;

    return (
      <SelectInputLabel
          disabled={ disabled }
          label={ label }
          margin={ margin }
          padding={ padding }
          paddingHorizontal={ paddingHorizontal }
          paddingVertical={ paddingVertical }>
        <div className="CheckBox">
          <input { ...rest }
              className="CheckBox__input"
              disabled={ disabled }
              type="checkbox" />
          <div className="CheckBox__indicator" />
        </div>
      </SelectInputLabel>
    );
  }
}
