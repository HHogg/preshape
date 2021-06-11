import * as React from 'react' ;
import { Appear, AppearProps, Base } from 'preshape';
import Showcase from '../Showcase';
import ThemeIcon from '../../ThemeIcon/ThemeIcon';
import { CatalogueItem } from '.';

const Item: CatalogueItem<{
  Appear: AppearProps;
}> = {
  name: 'Appear',
  description: 'Using framer-motion, the Appear component provides a variety of ways to make parts of the UI appear in style.',
  pictogram: require('../../../assets/pictogram-appear.svg').default,
  type: 'component',
  showcase: {
    Component: (props) => (
      <Showcase>
        <Base flex="horizontal" gap="x3">
          { Array.from({ length: 3 }).map((_, n) => (
            <Appear { ...props.Appear }
                alignChildren="middle"
                backgroundColor="text-shade-1"
                basis="0"
                delay={ (n + 1) * (props.Appear.delay || 0) }
                flex="vertical"
                grow
                key={ n }
                padding="x3"
                textColor="background-shade-1">
              <ThemeIcon size="1.5rem" />
            </Appear>
          )) }
        </Base>
      </Showcase>
    ),
    state: {
      Appear: {
        animation: 'FadeSlideUp',
        delay: 100,
      },
    },
  },
  apis: [{
    module: '"Appear/Appear"',
    name: 'AppearProps',
    rename: 'Appear',
  }],
};

export default Item;
