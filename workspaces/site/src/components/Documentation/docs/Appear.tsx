import * as React from 'react' ;
import { Appear, AppearProps, Box } from 'preshape';
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
    Component: (props) => {
      const [animation, setAnimation] = React.useState(props.Appear.animation);
      const [visible, setVisible] = React.useState(false);
      const ref = React.useRef<number>();

      React.useEffect(() => {
        setVisible(false);

        ref.current = window.setTimeout(() => {
          setAnimation(props.Appear.animation);
          setVisible(true);
        }, 1000);
      }, [props.Appear.animation]);

      return (
        <Showcase>
          <Box flex="horizontal" gap="x3">
            { Array.from({ length: 3 }).map((_, n) => (
              <Appear { ...props.Appear }
                  alignChildren="middle"
                  animation={ animation }
                  backgroundColor="text-shade-1"
                  basis="0"
                  delay={ (n + 1) * (props.Appear.delay || 0) }
                  flex="vertical"
                  grow
                  key={ n }
                  padding="x3"
                  textColor="background-shade-1"
                  visible={ visible }>
                <ThemeIcon size="1.5rem" />
              </Appear>
            )) }
          </Box>
        </Showcase>
      );
    },
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
