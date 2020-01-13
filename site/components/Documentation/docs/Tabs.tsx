import * as React from 'react' ;
import {
  BlockQuote,
  Icon,
  Link,
  Tabs,
  TabsProps,
  Tab,
  TabProps,
  TabContent,
  TabContentProps,
  Text,
  TypeIcon,
} from 'preshape';
import Showcase from '../Showcase';
import { CatalogueItem } from '.';

const icons: TypeIcon[] = ['Star', 'Sun', 'Moon'];

const Item: CatalogueItem<{
  Tabs: TabsProps;
  Tab: TabProps;
  TabContent: TabContentProps;
}> = {
  name: 'Tabs',
  description: 'Tab organisational components, useful for laying out related but nonconcurrent parts of the UI.',
  pictogram: require('../../../assets/pictogram-tabs.svg').default,
  type: 'component',
  showcase: {
    Component: (props) => {
      const [activeTab, setActiveTab] = React.useState(0);

      return (
        <Showcase>
          <Tabs { ...props.Tabs }>
            { Array.from({ length: 3 }).map((_, n) => (
              <Tab { ...props.Tab }
                  active={ activeTab === n || props.Tab.active || false }
                  key={ n }
                  onClick={ () => setActiveTab(n) }>
                <Icon name={ icons[n] } size="1rem" />
              </Tab>
            )) }
          </Tabs>

          <TabContent { ...props.TabContent } padding="x6">
            { activeTab === 0 && (
              <BlockQuote>
                <Text size="x1">
                  A star is an astronomical object consisting of a luminous spheroid
                  of plasma held together by its own gravity. The nearest star to Earth
                  is the Sun. Many other stars are visible to the naked eye from Earth during
                  the night, appearing as a multitude of fixed luminous points in the sky due
                  to their immense distance from Earth. Historically, the most prominent stars
                  were grouped into constellations and asterisms, the brightest of which gained
                  proper names. Astronomers have assembled star catalogues that identify the
                  known stars and provide standardized stellar designations. The observable
                  Universe contains an estimated 1×1024 stars, but most are invisible
                  to the naked eye from Earth, including all stars outside our galaxy, the
                  Milky Way.
                </Text>

                <Text margin="x2" size="x1">
                  <Link href="https://en.wikipedia.org/wiki/Star" strong underline>Star, Wikipedia</Link>
                </Text>
              </BlockQuote>
            ) }

            { activeTab === 1 && (
              <BlockQuote>
                <Text size="x1">
                  The Sun is the star at the center of the Solar System. It is a nearly
                  perfect sphere of hot plasma, with internal convective motion
                  that generates a magnetic field via a dynamo process. It is by far
                  the most important source of energy for life on Earth. Its diameter is
                  about 1.39 million kilometers (864,000 miles), or 109 times that of Earth,
                  and its mass is about 330,000 times that of Earth. It accounts for about
                  99.86% of the total mass of the Solar System. Roughly three quarters of
                  the Sun's mass consists of hydrogen (~73%); the rest is mostly helium (~25%),
                  with much smaller quantities of heavier elements, including oxygen, carbon,
                  neon, and iron.
                </Text>

                <Text margin="x2" size="x1">
                  <Link href="https://en.wikipedia.org/wiki/Sun" strong underline>Sun, Wikipedia</Link>
                </Text>
              </BlockQuote>
            ) }

            { activeTab === 2 && (
              <BlockQuote>
                <Text size="x1">
                  The Moon is an astronomical body that orbits Earth as its only
                  natural satellite. It is the fifth-largest satellite in the Solar
                  System, and the largest among planetary satellites relative to the
                  size of the planet that it orbits (its primary). The Moon is,
                  after Jupiter's satellite Io, the second-densest satellite in the
                  Solar System among those whose densities are known. The Moon is
                  thought to have formed about 4.51 billion years ago, not long after
                  Earth. The most widely accepted explanation is that the Moon formed
                  from the debris left over after a giant impact between Earth and a
                  Mars-sized body called Theia. New research of Moon rocks, although
                  not rejecting the Theia hypothesis, suggests that the Moon may be
                  older than previously thought.
                </Text>

                <Text margin="x2" size="x1">
                  <Link href="https://en.wikipedia.org/wiki/Moon" strong underline>Moon, Wikipedia</Link>
                </Text>
              </BlockQuote>
            ) }
          </TabContent>
        </Showcase>
      );
    },
    state: {
      Tabs: {},
      Tab: {},
      TabContent: {},
    },
  },
  apis: [{
    module: '"Tab/Tabs"',
    name: 'TabsProps',
    rename: 'Tabs',
  }, {
    module: '"Tab/Tab"',
    name: 'TabProps',
    rename: 'Tab',
  }],
};

export default Item;
