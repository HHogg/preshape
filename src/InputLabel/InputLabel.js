import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Flex from '../Flex/Flex';
import Text from '../Text/Text';
import './InputLabel.css';

export default class InputLabel extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    paddingHorizontal: PropTypes.string,
    paddingVertical: PropTypes.string,
  };

  render() {
    const {
      children,
      disabled,
      label,
      paddingHorizontal,
      paddingVertical,
      ...rest
    } = this.props;

    return (
      <Flex Component="label" { ...rest }
          className="InputLabel"
          direction="vertical"
          disabled={ disabled }>
        { label && (
          <Text
              paddingHorizontal={ paddingHorizontal }
              paddingVertical={ paddingVertical }
              size="small"
              strong>
            { label }
          </Text>
        ) }

        { children }
      </Flex>
    );
  }
}
