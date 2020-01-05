import * as React from 'react';
import Appear, { AppearProps } from '../Appear/Appear';
import { Attributes } from '../Base/Base';
import Flex from '../Flex/Flex';
import PlacementArrow from '../Placement/PlacementArrow';
import './Toolbar.css';

export interface ToolbarProps extends AppearProps {
  /**
   * Visibility toggle for the Toolbar.
   */
  visible: boolean;
}

const Toolbar = React.forwardRef<HTMLElement, Attributes<HTMLElement, ToolbarProps>>((props, ref) => {
  const { children, visible, ...rest } = props;

  return (
    <Appear { ...rest }
        animation="Pop"
        className="Toolbar"
        ref={ ref }
        visible={ visible }>
      <PlacementArrow backgroundColor="text-shade-2" />
      <Flex
          backgroundColor="text-shade-2"
          className="Toolbar__content"
          direction="horizontal"
          gap="x1"
          padding="x1">
        { children }
      </Flex>
    </Appear>
  );
});

export default Toolbar;
