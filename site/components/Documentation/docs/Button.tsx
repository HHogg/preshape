import * as React from 'react' ;
import { Button, ButtonProps, Buttons, ButtonsProps, Flex, Icon } from 'preshape';
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
  description: 'A standard clickable button to trigger some sort of action.',
  pictogram: require('../../../assets/pictogram-button.svg').default,
  type: 'component',
  showcase: {
    Component: (props: Props) => (
      <Flex direction="horizontal" gap="x4">
        <Flex direction="horizontal" grow>
          <Buttons { ...props.Buttons } grow>
            <Button { ...props.Button }>Lorem ipsum</Button>
          </Buttons>
        </Flex>

        <Flex direction="horizontal" grow>
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
        </Flex>

        <Flex direction="horizontal" grow>
          <Buttons { ...props.Buttons } grow>
            <Button { ...props.Button }>Lorem ipsum</Button>
          </Buttons>
        </Flex>
      </Flex>
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
