import * as React from 'react' ;
import { BulletPoint, BulletPointProps, BulletPoints, BulletPointsProps } from 'preshape';
import { CatalogueItem } from '.';

const Item: CatalogueItem<{
  BulletPoint: BulletPointProps;
  BulletPoints: BulletPointsProps;
}> = {
  name: 'BulletPoints',
  description: 'A vertical list component for listing your todos.',
  type: 'component',
  showcase: {
    Component: (props) => (
      <BulletPoints { ...props.BulletPoints }>
        { Array.from({ length: 5 }).map((_, n) => (
          <BulletPoint { ...props.BulletPoint } key={ n }>
            Lorem ipsum
          </BulletPoint>
        )) }
      </BulletPoints>
    ),
    state: {
      BulletPoint: {},
      BulletPoints: {},
    },
  },
  apis: [{
    module: '"BulletPoints/BulletPoints"',
    name: 'BulletPointsProps',
    rename: 'BulletPoints',
  }, {
    module: '"BulletPoints/BulletPoint"',
    name: 'BulletPointProps',
    rename: 'BulletPoint',
  }],
};

export default Item;
