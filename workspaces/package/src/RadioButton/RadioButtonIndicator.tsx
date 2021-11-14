import React, {
  forwardRef,
  InputHTMLAttributes,
  RefForwardingComponent,
} from 'react';

const RadioButtonIndicator: RefForwardingComponent<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
> = (props, ref) => {
  return (
    <div className="RadioButton">
      <input {...props} className="RadioButton__input" ref={ref} type="radio" />
      <div className="RadioButton__indicator" />
    </div>
  );
};

export default forwardRef(RadioButtonIndicator);
