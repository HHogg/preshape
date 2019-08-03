import * as React from 'react';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const RadioButtonIndicator: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <div className="RadioButton">
      <input { ...props }
          className="RadioButton__input"
          type="radio" />
      <div className="RadioButton__indicator" />
    </div>
  );
};

export default RadioButtonIndicator;
