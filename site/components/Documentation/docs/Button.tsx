import * as React from 'react' ;
import { Base, Button, ButtonProps, Buttons, ButtonsProps, Icon } from 'preshape';
import Showcase from '../Showcase';
import ShowcaseCode from '../ShowcaseCode';
import { CatalogueItem } from '.';

interface Props {
  Button: ButtonProps;
  Buttons: ButtonsProps;
}

const Item: CatalogueItem<{
  Button: ButtonProps;
  Buttons: ButtonsProps;
}> = {
  name: 'Button',
  description: 'A standard clickable button with a variety of uses to trigger some sort of action.',
  pictogram: require('../../../assets/pictogram-button.svg').default,
  type: 'component',
  showcase: {
    Component: (props: Props) => (
      <Showcase>
        <Base flex="horizontal" gap="x4">
          <Base flex="horizontal" grow>
            <Buttons { ...props.Buttons } grow>
              <Button { ...props.Button }>Lorem ipsum</Button>
            </Buttons>
          </Base>

          <Base flex="horizontal" grow>
            <ShowcaseCode>
              <Buttons { ...props.Buttons } grow>
                <Button { ...props.Button }>
                  <Icon name="Beginning" size="1rem" />
                </Button>
                <Button { ...props.Button }>
                  <Icon name="Play" size="1rem" />
                </Button>
                <Button { ...props.Button }>
                  <Icon name="Pause" size="1rem" />
                </Button>
                <Button { ...props.Button }>
                  <Icon name="End" size="1rem" />
                </Button>
              </Buttons>
            </ShowcaseCode>
          </Base>

          <Base flex="horizontal" grow>
            <Buttons { ...props.Buttons } grow>
              <Button { ...props.Button }>Lorem ipsum</Button>
            </Buttons>
          </Base>
        </Base>
      </Showcase>
    ),
    state: {
      Buttons: {
        joined: true,
      },
      Button: {

      },
    },
  },
  apis: [{
    module: '"Button/Button"',
    name: 'ButtonProps',
    rename: 'Button',
  }, {
    module: '"Button/Buttons"',
    name: 'ButtonsProps',
    rename: 'Buttons',
  }],
};

export default Item;
