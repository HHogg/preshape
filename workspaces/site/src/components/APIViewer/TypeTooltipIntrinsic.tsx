import React, { MouseEvent, FormEvent, ReactNode, Ref, useState } from 'react';
import {
  Form,
  Input,
  InputLabel,
  Placement,
  PlacementArrow,
  PlacementContent,
  PlacementManager,
  PlacementReference,
} from 'preshape';
import { Renderer } from './Types';

export interface Props extends Renderer {
  children: (props: {
    onClick: (event: MouseEvent) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: Ref<any>;
  }) => ReactNode;
  name?: string;
  placeholder?: string;
}

const TypeTooltipIntrinsic = (props: Props) => {
  const { children, state, onStateChange, placeholder } = props;
  const [visible, setVisible] = useState(false);
  const [textValue, setTextValue] = useState((state || '').toString());

  const handleOnChange = (event: FormEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setTextValue(value);
    onStateChange(value);
  };

  const handleOnClick = (event: MouseEvent) => {
    event.nativeEvent.stopImmediatePropagation();
    setVisible(true);
  };

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setVisible(false);
  };

  return (
    <PlacementManager>
      <PlacementReference>
        {(props) => children({ ...props, onClick: handleOnClick })}
      </PlacementReference>

      <Placement
        onClose={() => setVisible(false)}
        unrender
        visible={visible}
        width="12rem"
        zIndex={1}
      >
        <PlacementContent
          backgroundColor="text-shade-1"
          borderRadius="x2"
          padding="x1"
        >
          <Form onSubmit={handleOnSubmit}>
            <InputLabel>
              <Input
                onChange={handleOnChange}
                placeholder={placeholder}
                value={textValue}
              />
            </InputLabel>
          </Form>
        </PlacementContent>
        <PlacementArrow backgroundColor="text-shade-1" />
      </Placement>
    </PlacementManager>
  );
};

export default TypeTooltipIntrinsic;
