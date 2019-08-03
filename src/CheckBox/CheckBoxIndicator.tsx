import * as React from 'react';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const CheckboxIndicator: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <div className="CheckBox">
      <input { ...props }
          className="CheckBox__input"
          type="checkbox" />
      <div className="CheckBox__indicator" />
    </div>
  );
};

export default CheckboxIndicator;
