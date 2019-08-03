import * as React from 'react';
import Flex, { Props as FlexProps } from '../Flex/Flex';
import './Menu.css';

interface Props extends FlexProps {}

const Menu: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Flex { ...props }
        className="Menu"
        direction="horizontal"
        gap="x3" />
  );
};

export default Menu;
