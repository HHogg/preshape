import * as React from 'react';

const CheckboxIndicator: React.RefForwardingComponent<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
> = (props, ref) => {
  return (
    <div className="CheckBox">
      <input {...props} className="CheckBox__input" ref={ref} type="checkbox" />
      <div className="CheckBox__indicator" />
    </div>
  );
};

export default React.forwardRef(CheckboxIndicator);
