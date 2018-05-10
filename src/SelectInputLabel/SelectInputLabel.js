import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Flex from '../Flex/Flex';
import Text from '../Text/Text';
import './SelectInputLabel.css';

export default class SelectInputLabel extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
  };

  render() {
    const {
      children,
      label,
      ...rest
    } = this.props;

    return (
      <Flex { ...rest }
          Component="label"
          alignChildrenVertical="middle"
          className="SelectInputLabel"
          direction="horizontal"
          gutter="x2">
        <Flex>
          { children }
        </Flex>

        <Flex grow>
          <Text size="small" strong>
            { label }
          </Text>
        </Flex>
      </Flex>
    );
  }
}
