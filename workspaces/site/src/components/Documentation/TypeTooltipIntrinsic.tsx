import { FormEvent, useState, PropsWithChildren } from 'react';
import { Form, Input, InputLabel, Tooltip } from 'preshape';
import { ApiValueController } from './Types';

export interface Props extends PropsWithChildren<ApiValueController> {
  name?: string;
  placeholder?: string;
}

const TypeTooltipIntrinsic = (props: Props) => {
  const { children, state, onStateChange, placeholder } = props;
  const [textValue, setTextValue] = useState((state || '').toString());

  const handleOnChange = (event: FormEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setTextValue(value);
    onStateChange(value);
  };

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Tooltip
      content={
        <Form onSubmit={handleOnSubmit}>
          <InputLabel>
            <Input
              onChange={handleOnChange}
              placeholder={placeholder}
              value={textValue}
            />
          </InputLabel>
        </Form>
      }
      trigger="click"
    >
      {children}
    </Tooltip>
  );
};

export default TypeTooltipIntrinsic;
