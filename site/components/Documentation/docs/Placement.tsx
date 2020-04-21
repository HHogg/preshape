import * as React from 'react' ;
import {
  Button,
  Buttons,
  Flex,
  Icon,
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
  description: 'A powerful set of components for placing contents around reference nodes. Uses the awesome PopperJS positioning engine. ',
  pictogram: require('../../../assets/pictogram-placement.svg').default,
  type: 'component',
  showcase: {
    Component: (props) => (
      <Showcase>
        <Flex alignChildren="middle" direction="horizontal">
          <PlacementManager { ...props.PlacementManager }>
            <PlacementReference { ...props.PlacementReference }>
              { (props) => (
                <Icon { ...props } name="Star" size="2rem" />
              ) }
            </PlacementReference>

            <Placement { ...props.Placement } elevate zIndex={ 1 }>
              <PlacementArrow backgroundColor="text-shade-1" />
              <PlacementContent
                  backgroundColor="text-shade-1"
                  borderRadius="x1"
                  padding="x1"
                  textColor="background-shade-1">
                <Buttons joined>
                  <Button fill>
                    <Icon name="Pencil" size="1rem" />
                  </Button>

                  <Button fill>
                    <Icon name="Copy" size="1rem" />
                  </Button>

                  <Button fill>
                    <Icon name="Water" size="1rem" />
                  </Button>
                </Buttons>
              </PlacementContent>
            </Placement>
          </PlacementManager>
        </Flex>
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
  apis: [{
    module:'"Placement/Placement"',
    name: 'PlacementProps',
    rename: 'Placement',
  }, {
    module:'"Placement/PlacementArrow"',
    name: 'PlacementArrowProps',
    rename: 'PlacementArrow',
  }, {
    module:'"Placement/PlacementContent"',
    name: 'PlacementContentProps',
    rename: 'PlacementContent',
  }, {
    module:'"Placement/PlacementManager"',
    name: 'PlacementManagerProps',
    rename: 'PlacementManager',
  }, {
    module:'"Placement/PlacementReference"',
    name: 'PlacementReferenceProps',
    rename: 'PlacementReference',
  }],
};

export default Item;
