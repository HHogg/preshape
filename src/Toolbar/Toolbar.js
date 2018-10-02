import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Appear from '../Appear/Appear';
import Flex from '../Flex/Flex';
import PlacementArrow from '../Placement/PlacementArrow';
import './Toolbar.css';

export default class Toolbar extends Component {
  static propTypes = {
    /** Toolbar action components. */
    children: PropTypes.node.isRequired,
    /**
     * Visibility toggle for the Toolbar.
     */
    visible: PropTypes.bool.isRequired,
  };

  render() {
    const { children, visible, ...rest } = this.props;

    return (
      <Appear { ...rest }
          animation="Pop"
          className="Toolbar"
          visible={ visible }>
        <PlacementArrow backgroundColor="text-shade-2" />
        <Flex
            backgroundColor="text-shade-2"
            className="Toolbar__content"
            direction="horizontal"
            gutter="x1"
            padding="x1">
          { children }
        </Flex>
      </Appear>
    );
  }
}
