import * as React from 'react';
import Base, { Props as BaseProps } from '../Base/Base';
import { PlacementArrowPropsContext } from './Placement';

interface Props extends BaseProps {}

const PlacementArrow: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <PlacementArrowPropsContext.Consumer>
      { ({ ref, style }) => (
        <Base { ...props }
            className="Placement__arrow"
            innerRef={ ref }
            style={ style } />
      ) }
    </PlacementArrowPropsContext.Consumer>
  );
};

export default PlacementArrow;
