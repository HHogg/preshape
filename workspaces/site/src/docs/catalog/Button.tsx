import {
  Box,
  Button,
  ButtonProps,
  Buttons,
  ButtonsProps,
  Icons,
} from 'preshape';
import { CatalogueItem } from '..';
import Pictogram from './pictograms/PictogramButton';

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
  Pictogram,
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
  showcase: {
    state: {
      Buttons: {
        joined: true,
      },
      Button: {},
    },
    Component: (props: Props) => (
      <Box flex="vertical" gap="x4">
        <Box grow>
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
        </Box>

        <Box grow>
          <Buttons {...props.Buttons} grow>
            <Button {...props.Button} grow>
              Lorem ipsum
            </Button>
          </Buttons>
        </Box>
      </Box>
    ),
    code: `
import { Buttons, Button } from 'preshape';

<Buttons>
  <Button variant="tertiary">
    ...
  </Button>
<Buttons>
    `,
  },
};

export default Item;
