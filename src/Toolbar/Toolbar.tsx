
import * as React from 'react';
import Appear, { Props as AppearProps } from '../Appear/Appear';
import Flex from '../Flex/Flex';
import PlacementArrow from '../Placement/PlacementArrow';
import './Toolbar.css';

interface Props extends AppearProps {
  /** Toolbar action components. */
  children: React.ReactNode;
  /**
   * Visibility toggle for the Toolbar.
   */
  visible: boolean;
}

const Toolbar: React.FunctionComponent<Props> = (props: Props) => {
  const { children, visible, ...rest } = props;

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
          gap="x1"
          padding="x1">
        { children }
      </Flex>
    </Appear>
  );
};

export default Toolbar;
