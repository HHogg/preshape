import * as React from 'react' ;
import { Alert, AlertProps, Text } from 'preshape';
import { CatalogueItem } from '.';

const Item: CatalogueItem<{
  Alert: AlertProps;
}> = {
  name: 'Alert',
  description: 'Useful for bringing attention to a message.',
  type: 'component',
  showcase: {
    Component: (props) => (
      <Alert { ...props.Alert } padding="x4">
        <Text size="x1" strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          laoreet faucibus quam et fringilla. Maecenas vitae pulvinar augue.
          Suspendisse mollis bibendum leo, ac porta nisi convallis eget.</Text>
      </Alert>
    ),
    state: {
      Alert: {
        color: 'negative',
        fill: true,
      },
    },
  },
  apis: [{
    module: '"Alert/Alert"',
    name: 'AlertProps',
    rename: 'Alert',
  }],
};

export default Item;
