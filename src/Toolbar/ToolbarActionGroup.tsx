
import * as React from 'react';
import Buttons, { Props as ButtonsProps } from '../Button/Buttons';

interface Props extends ButtonsProps {}

const ToolbarActionGroup: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Buttons { ...props } joined />
  );
};

export default ToolbarActionGroup;
