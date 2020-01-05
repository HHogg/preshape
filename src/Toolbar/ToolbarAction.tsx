import * as React from 'react';
import { Attributes } from '../Base/Base';
import Button, { ButtonProps } from '../Button/Button';

export interface ToolbarActionProps extends ButtonProps {}

const ToolbarAction = React.forwardRef<HTMLButtonElement, Attributes<HTMLButtonElement, ToolbarActionProps>>((props, ref) => {
  return (
    <Button { ...props } fill ref={ ref } />
  );
});

export default ToolbarAction;
