import {
  BulletPoint,
  BulletPointProps,
  BulletPoints,
  BulletPointsProps,
} from 'preshape';
import { CatalogueItem } from '..';
import Pictogram from './pictograms/PictogramBulletpoints';

const Item: CatalogueItem<{
  BulletPoint: BulletPointProps;
  BulletPoints: BulletPointsProps;
}> = {
  name: 'BulletPoints',
  description:
    'A vertical list component for listing your todos, ordered and chaos modes included.',
  Pictogram,
  apis: [
    {
      module: '"BulletPoints/BulletPoints"',
      name: 'BulletPointsProps',
      rename: 'BulletPoints',
    },
    {
      module: '"BulletPoints/BulletPoint"',
      name: 'BulletPointProps',
      rename: 'BulletPoint',
    },
  ],
  showcase: {
    state: {
      BulletPoint: {},
      BulletPoints: {},
    },
    Component: (props) => (
      <BulletPoints {...props.BulletPoints}>
        {Array.from({ length: 5 }).map((_, n) => (
          <BulletPoint {...props.BulletPoint} key={n}>
            Lorem ipsum
          </BulletPoint>
        ))}
      </BulletPoints>
    ),
    code: `
import { BulletPoints, BulletPoint } from 'preshape';

<BulletPoints>
  <BulletPoint>...</BulletPoint>
  <BulletPoint>...</BulletPoint>
</BulletPoints>
`,
  },
};

export default Item;
