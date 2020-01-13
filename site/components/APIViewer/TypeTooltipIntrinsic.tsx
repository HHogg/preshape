import * as React from 'react';
import {
  themesOpposite,
  Form,
  Input,
  Placement,
  PlacementArrow,
  PlacementContent,
  PlacementManager,
  PlacementReference,
} from 'preshape';
import { Renderer } from './Types';
import SiteContext from '../SiteContext';

export interface Props extends Renderer {
  children: (props: {
    onClick: (event: React.MouseEvent) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: React.Ref<any>;
  }) => React.ReactNode;
  name?: string;
  placeholder?: string;
}

export default (props: Props) => {
  const { children, context, state, onStateChange, placeholder } = props;
  const { theme } = React.useContext(SiteContext);
  const [visible, setVisible] = React.useState(false);
  const [textValue, setTextValue] = React.useState((state || '').toString());

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setTextValue(value);
    onStateChange(value);
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
          theme={ themesOpposite[theme] }
          unrender
          visible={ visible }
          zIndex={ 1 }>
        <PlacementArrow backgroundColor="background-shade-1" />
        <PlacementContent
            backgroundColor="background-shade-1"
            borderRadius="x1"
            padding="x1">
          <Form onSubmit={ handleOnSubmit }>
            <Input
                label={ context.name }
                onChange={ handleOnChange }
                placeholder={ placeholder }
                value={ textValue } />
          </Form>
        </PlacementContent>
      </Placement>
    </PlacementManager>
  );
};
