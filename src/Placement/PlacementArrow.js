import React, { Component } from 'react';
import Base from '../Base/Base';
import { PlacementArrowPropsContext } from './Placement';

export default class PlacementArrow extends Component {
  render() {
    return (
      <PlacementArrowPropsContext.Consumer>
        { ({ ref, style }) => (
          <Base { ...this.props }
              className="Placement__arrow"
              innerRef={ ref }
              style={ style } />
        ) }
      </PlacementArrowPropsContext.Consumer>
    );
  }
}
