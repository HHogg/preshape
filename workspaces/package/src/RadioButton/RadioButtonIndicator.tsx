import { forwardRef, InputHTMLAttributes } from 'react';

export const RadioButtonIndicator = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <div className="RadioButton">
      <input {...props} className="RadioButton__input" ref={ref} type="radio" />
      <div className="RadioButton__indicator" />
    </div>
  );
});

RadioButtonIndicator.displayName = 'RadioButtonIndicator';
