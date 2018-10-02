import PropTypes from 'prop-types';
import React, { Component, createContext } from 'react';
import { Popper } from 'react-popper';
import classnames from 'classnames';
import './Placement.css';

export const PlacementArrowPropsContext = createContext();

export default class Placement extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Popper { ...rest }>
        { ({ arrowProps, placement, ref, style }) => (
          <PlacementArrowPropsContext.Provider value={ arrowProps }>
            <div
                className={ classnames('Placement', `Placement--${placement}`) }
                ref={ ref }
                style={ style }>
              { children }
            </div>
          </PlacementArrowPropsContext.Provider>
        ) }
      </Popper>
    );
  }
}
