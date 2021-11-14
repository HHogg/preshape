import React, {
  forwardRef,
  InputHTMLAttributes,
  RefForwardingComponent,
} from 'react';

const CheckboxIndicator: RefForwardingComponent<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
> = (props, ref) => {
  return (
    <div className="CheckBox">
      <input {...props} className="CheckBox__input" ref={ref} type="checkbox" />
      <div className="CheckBox__indicator" />
    </div>
  );
};

export default forwardRef(CheckboxIndicator);
