import React from 'react';
import {
  Box,
  Button,
  Buttons,
  Icons,
  Placement,
  PlacementProps,
  PlacementArrow,
  PlacementArrowProps,
  PlacementContent,
  PlacementContentProps,
  PlacementManager,
  PlacementManagerProps,
  PlacementReference,
  PlacementReferenceProps,
} from 'preshape';
import { CatalogueItem } from '.';
import Showcase from '../Showcase';

const Item: CatalogueItem<{
  Placement: PlacementProps;
  PlacementArrow: PlacementArrowProps;
  PlacementContent: PlacementContentProps;
  PlacementManager: PlacementManagerProps;
  PlacementReference: PlacementReferenceProps;
}> = {
  name: 'Placement',
  description:
    'A powerful set of components for placing contents around reference nodes. Uses the awesome PopperJS positioning engine. ',
  pictogram: require('../../SVGs/PictogramPlacement').default,
  type: 'component',
  showcase: {
    Component: (props) => (
      <Showcase>
        <Box alignChildren="middle" flex="horizontal">
          <PlacementManager {...props.PlacementManager}>
            <PlacementReference {...props.PlacementReference}>
              {(props) => <Icons.Star {...props} name="Star" size="2rem" />}
            </PlacementReference>

            <Placement {...props.Placement} elevate zIndex={1}>
              <PlacementArrow backgroundColor="text-shade-1" />
              <PlacementContent
                backgroundColor="text-shade-1"
                borderRadius="x1"
                padding="x1"
                textColor="background-shade-1"
              >
                <Buttons joined>
                  <Button variant="primary">
                    <Icons.Edit2 name="Pencil" size="16px" />
                  </Button>

                  <Button variant="primary">
                    <Icons.Copy name="Copy" size="16px" />
                  </Button>

                  <Button variant="primary">
                    <Icons.Droplet name="Water" size="16px" />
                  </Button>
                </Buttons>
              </PlacementContent>
            </Placement>
          </PlacementManager>
        </Box>
      </Showcase>
    ),
    state: {
      Placement: {
        placement: 'top',
        options: {
          modifiers: {
            preventOverflow: {
              boundariesElement: 'window',
            },
          },
        },
      },
      PlacementArrow: {},
      PlacementContent: {},
      PlacementManager: {
        children: null,
      },
      PlacementReference: {
        children: () => null,
      },
    },
  },
  apis: [
    {
      module: '"Placement/Placement"',
      name: 'PlacementProps',
      rename: 'Placement',
    },
    {
      module: '"Placement/PlacementArrow"',
      name: 'PlacementArrowProps',
      rename: 'PlacementArrow',
    },
    {
      module: '"Placement/PlacementContent"',
      name: 'PlacementContentProps',
      rename: 'PlacementContent',
    },
    {
      module: '"Placement/PlacementManager"',
      name: 'PlacementManagerProps',
      rename: 'PlacementManager',
    },
    {
      module: '"Placement/PlacementReference"',
      name: 'PlacementReferenceProps',
      rename: 'PlacementReference',
    },
  ],
};

export default Item;
