import { forwardRef } from 'react';

export const RadioButtonIndicator = forwardRef<
  HTMLInputElement,
  JSX.IntrinsicElements['input']
>((props, ref) => {
  return (
    <div className="RadioButton">
      <input {...props} className="RadioButton__input" ref={ref} type="radio" />
      <div className="RadioButton__indicator" />
    </div>
  );
});
