import * as React from 'react';
import {
  Box,
  Button,
  ButtonProps,
  Buttons,
  ButtonsProps,
  Icons,
} from 'preshape';
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
  description:
    'A standard clickable button with a variety of uses to trigger some sort of action.',
  pictogram: require('../../../assets/pictogram-button.svg').default,
  type: 'component',
  showcase: {
    Component: (props: Props) => (
      <Showcase>
        <Box flex="horizontal" gap="x4">
          <Box flex="horizontal" grow>
            <Buttons {...props.Buttons} grow>
              <Button {...props.Button} grow tag="a">
                Lorem ipsum
              </Button>
            </Buttons>
          </Box>

          <Box flex="horizontal" grow>
            <ShowcaseCode>
              <Buttons {...props.Buttons} grow>
                <Button {...props.Button} grow>
                  <Icons.SkipBack size="16px" />
                </Button>
                <Button {...props.Button} grow>
                  <Icons.Play name="Play" size="16px" />
                </Button>
                <Button {...props.Button} grow>
                  <Icons.Pause name="Pause" size="16px" />
                </Button>
                <Button {...props.Button} grow>
                  <Icons.SkipForward name="End" size="16px" />
                </Button>
              </Buttons>
            </ShowcaseCode>
          </Box>

          <Box flex="horizontal" grow>
            <Buttons {...props.Buttons} grow>
              <Button {...props.Button} grow>
                Lorem ipsum
              </Button>
            </Buttons>
          </Box>
        </Box>
      </Showcase>
    ),
    state: {
      Buttons: {
        joined: true,
      },
      Button: {},
    },
  },
  apis: [
    {
      module: '"Button/Button"',
      name: 'ButtonProps',
      rename: 'Button',
    },
    {
      module: '"Button/Buttons"',
      name: 'ButtonsProps',
      rename: 'Buttons',
    },
  ],
};

export default Item;
