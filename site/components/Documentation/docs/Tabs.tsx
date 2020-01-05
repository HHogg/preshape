import * as React from 'react' ;
import { Tabs, TabsProps, Tab, TabProps, TabContent, Text } from 'preshape';
import { CatalogueItem } from '.';

const Item: CatalogueItem<{
  Tabs: TabsProps;
  Tab: TabProps;
}> = {
  name: 'Tabs',
  description: 'Tab organisational components, useful for laying out related by nonconcurrent parts of the UI.',
  type: 'component',
  showcase: {
    Component: (props) => {
      const [activeTab, setActiveTab] = React.useState(0);

      return (
        <React.Fragment>
          <Tabs { ...props.Tabs }>
            { Array.from({ length: 3 }).map((_, n) => (
              <Tab { ...props.Tab }
                  active={ activeTab === n || props.Tab.active }
                  key={ n }
                  onClick={ () => setActiveTab(n) }>
                Lorem ipsum
              </Tab>
            )) }
          </Tabs>

          <TabContent padding="x3">
            <Text size="x3">Lorem Ipsum ({ activeTab })</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenean sed risus ex. Aliquam blandit vitae enim at vestibulum.
              Quisque aliquam, nibh eu euismod pharetra, turpis mi varius
              lectus, vel sodales risus orci in dolor.</Text>
          </TabContent>
        </React.Fragment>
      );
    },
    state: {
      Tabs: {},
      Tab: {},
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
