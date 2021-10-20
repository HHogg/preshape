import * as React from 'react';

const RadioButtonIndicator: React.RefForwardingComponent<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>> = (props, ref) => {
  return (
    <div className="RadioButton">
      <input { ...props }
          className="RadioButton__input"
          ref={ ref }
          type="radio" />
      <div className="RadioButton__indicator" />
    </div>
  );
};

export default React.forwardRef(RadioButtonIndicator);
