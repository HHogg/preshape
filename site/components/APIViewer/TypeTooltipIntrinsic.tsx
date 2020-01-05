import * as React from 'react';
import {
  Form,
  Input,
  Placement,
  PlacementArrow,
  PlacementContent,
  PlacementManager,
  PlacementReference,
} from 'preshape';

interface Props {
  children: (props: {
    onClick: (event: React.MouseEvent) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: React.Ref<any>;
  }) => React.ReactNode;
  value?: number | string;
  onChange: (value?: string) => void;
  placeholder: string;
}

export default (props: Props) => {
  const { children, value, onChange, placeholder } = props;
  const [visible, setVisible] = React.useState(false);
  const [textValue, setTextValue] = React.useState(value || '');

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setTextValue(value);
    onChange(value);
  };

  const handleOnClick = (event: React.MouseEvent) => {
    event.nativeEvent.stopImmediatePropagation();
    setVisible(true);
  };

  const handleOnSubmit = (event: React.FocusEvent<HTMLFormElement>) => {
    event.preventDefault();
    setVisible(false);
  };

  return (
    <PlacementManager>
      <PlacementReference>
        { (props) => children({ ...props, onClick: handleOnClick }) }
      </PlacementReference>

      <Placement
          onClose={ () => setVisible(false) }
          theme="night"
          visible={ visible }
          zIndex={ 1 }>
        <PlacementArrow backgroundColor="background-shade-1" />
        <PlacementContent
            backgroundColor="background-shade-1"
            borderRadius="x1"
            padding="x1">
          <Form onSubmit={ handleOnSubmit }>
            <Input
                onChange={ handleOnChange }
                placeholder={ placeholder }
                value={ textValue } />
          </Form>
        </PlacementContent>
      </Placement>
    </PlacementManager>
  );
};
