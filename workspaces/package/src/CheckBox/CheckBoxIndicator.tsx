import React, { forwardRef } from 'react';

const CheckboxIndicator: React.ForwardRefRenderFunction<
  HTMLInputElement,
  JSX.IntrinsicElements['input']
> = (props, ref) => {
  return (
    <div className="CheckBox">
      <input {...props} className="CheckBox__input" ref={ref} type="checkbox" />
      <div className="CheckBox__indicator" />
    </div>
  );
};

export default forwardRef(CheckboxIndicator);
