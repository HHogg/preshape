import { forwardRef, InputHTMLAttributes } from 'react';

export const CheckBoxIndicator = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <div className="CheckBox">
      <input {...props} className="CheckBox__input" ref={ref} type="checkbox" />
      <div className="CheckBox__indicator" />
    </div>
  );
});
