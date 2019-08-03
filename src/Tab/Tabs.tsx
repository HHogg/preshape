import * as React from 'react';
import Flex, { Props as FlexProps } from '../Flex/Flex';
import './Tabs.css';

interface Props extends FlexProps {}

const Tabs: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Flex { ...props } className="Tabs" />
  );
};

export default Tabs;
