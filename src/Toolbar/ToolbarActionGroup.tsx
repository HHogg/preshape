import * as React from 'react';
import { Attributes } from '../Base/Base';
import Buttons, { ButtonsProps } from '../Button/Buttons';

export interface ToolbarActionGroupProps extends ButtonsProps {}

const ToolbarActionGroup = React.forwardRef<HTMLDivElement, Attributes<HTMLDivElement, ToolbarActionGroupProps>>((props, ref) => {
  return (
    <Buttons { ...props } joined ref={ ref } />
  );
});

export default ToolbarActionGroup;
