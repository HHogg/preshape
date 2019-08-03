import * as React from 'react';
import Flex, { Props as FlexProps } from '../Flex/Flex';

interface Props extends FlexProps {}

const TabContent: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Flex { ...props } className="TabContent" />
  );
};

export default TabContent;
