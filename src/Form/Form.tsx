import * as React from 'react';
import Base, { Attributes, BaseProps } from '../Base/Base';

interface Props extends BaseProps {}

const Form = React.forwardRef<HTMLFormElement, Attributes<HTMLFormElement, Props>>((props, ref) => {
  return (
    <Base { ...props } ref={ ref } tag="form" />
  );
});

export default Form;
