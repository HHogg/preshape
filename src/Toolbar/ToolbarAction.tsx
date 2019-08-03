
import * as React from 'react';
import Button, { Props as ButtonProps } from '../Button/Button';

interface Props extends ButtonProps {}

const ToolbarAction: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Button { ...props } style="fill" />
  );
};

export default ToolbarAction;
