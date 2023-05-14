import React, { forwardRef } from 'react';

const RadioButtonIndicator: React.ForwardRefRenderFunction<
  HTMLInputElement,
  JSX.IntrinsicElements['input']
> = (props, ref) => {
  return (
    <div className="RadioButton">
      <input {...props} className="RadioButton__input" ref={ref} type="radio" />
      <div className="RadioButton__indicator" />
    </div>
  );
};

export default forwardRef(RadioButtonIndicator);
