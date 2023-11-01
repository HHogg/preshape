import { Appear, AppearProps, Box } from 'preshape';
import { useEffect, useRef, useState } from 'react';
import { CatalogueItem } from '..';
import ThemeIcon from '../../components/ThemeIcon/ThemeIcon';
import { Pictogram } from './pictograms/PictogramAppear';

const Item: CatalogueItem<{
  Appear: AppearProps;
}> = {
  name: 'Appear',
  description:
    'Using framer-motion, the Appear component provides a variety of ways to make parts of the UI appear in style.',
  Pictogram,
  apis: [
    {
      module: '"Appear/Appear"',
      name: 'AppearProps',
      rename: 'Appear',
    },
  ],
  showcase: {
    state: {
      Appear: {
        animation: 'FadeSlideUp',
        delay: 100,
      },
    },
    Component: (props) => {
      const [animation, setAnimation] = useState(props.Appear.animation);
      const [visible, setVisible] = useState(false);
      const ref = useRef<number>();

      useEffect(() => {
        setVisible(false);

        if (typeof window !== 'undefined') {
          ref.current = window.setTimeout(() => {
            setAnimation(props.Appear.animation);
            setVisible(true);
          }, 1000);
        }
      }, [props.Appear.animation]);

      return (
        <Box flex="horizontal" gap="x3">
          {Array.from({ length: 3 }).map((_, n) => (
            <Appear
              {...props.Appear}
              alignChildren="middle"
              animation={animation}
              backgroundColor="text-shade-1"
              borderRadius="x2"
              basis="0"
              delay={(n + 1) * (props.Appear.delay || 0)}
              flex="vertical"
              grow
              key={n}
              padding="x3"
              textColor="background-shade-1"
              visible={visible}
            >
              <ThemeIcon size="1.5rem" />
            </Appear>
          ))}
        </Box>
      );
    },
    code: `
import { Appear } from 'preshape';

<Appear animation="FadeSlideUp" delay={100}>
    ...
</Appear>
`,
  },
};

export default Item;
