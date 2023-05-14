import { Alert, AlertProps, Text } from 'preshape';
import { CatalogueItem } from '..';
import Pictogram from './pictograms/PictogramAlert';

const Item: CatalogueItem<{
  Alert: AlertProps;
}> = {
  name: 'Alert',
  description: 'An alerting component for bringing attention to a message.',
  Pictogram,
  apis: [
    {
      module: '"Alert/Alert"',
      name: 'AlertProps',
      rename: 'Alert',
    },
  ],
  showcase: {
    state: {
      Alert: {
        color: 'accent',
        fill: true,
      },
    },
    Component: (props) => (
      <Alert {...props.Alert} padding="x4">
        <Text size="x3" strong>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet
          faucibus quam et fringilla. Maecenas vitae pulvinar augue. Suspendisse
          mollis bibendum leo, ac porta nisi convallis eget.
        </Text>
      </Alert>
    ),
    code: `
import { Alert } from 'preshape';

<Alert color="accent" fill>
  ...
</Alert>`,
  },
};

export default Item;
