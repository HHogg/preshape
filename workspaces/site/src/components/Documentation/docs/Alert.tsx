import * as React from 'react' ;
import { Alert, AlertProps, Text } from 'preshape';
import Showcase from '../Showcase';
import { CatalogueItem } from '.';

const Item: CatalogueItem<{
  Alert: AlertProps;
}> = {
  name: 'Alert',
  description: 'An alerting component for bringing attention to a message.',
  pictogram:  require('../../../assets/pictogram-alert.svg').default,
  type: 'component',
  showcase: {
    Component: (props) => (
      <Showcase>
        <Alert { ...props.Alert } padding="x4">
          <Text size="x3" strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            laoreet faucibus quam et fringilla. Maecenas vitae pulvinar augue.
            Suspendisse mollis bibendum leo, ac porta nisi convallis eget.</Text>
        </Alert>
      </Showcase>
    ),
    state: {
      Alert: {
        color: 'accent',
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
