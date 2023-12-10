import { BugIcon, GaugeIcon, HighlighterIcon, PaletteIcon } from 'lucide-react';
import { ConfigMenu, ConfigMenuProps } from 'preshape';
import { Fragment, useState } from 'react';
import { CatalogueItem } from '..';
import { Pictogram } from './pictograms/PictogramConfigMenu';

const Item: CatalogueItem<{
  ConfigMenu: ConfigMenuProps;
}> = {
  name: 'ConfigMenu',
  description: 'Give it a config and it creates a YouTube style config menu',
  Pictogram,
  apis: [
    {
      module: '"ConfigMenu/ConfigMenu"',
      name: 'ConfigMenuProps',
      rename: 'ConfigMenu',
    },
  ],
  showcase: {
    state: {
      ConfigMenu: {
        onValueChange: () => {},
        config: {
          speed: {
            label: 'Speed',
            icon: GaugeIcon,
            config: {
              type: 'number',
              value: 1,
              min: 1,
              max: 10,
              step: 1,
              formatter: (value) => `${value}x`,
            },
          },
          debug: {
            label: 'Debug',
            icon: BugIcon,
            config: {
              type: 'boolean',
              value: false,
              labelTrue: 'On',
              labelFalse: 'Off',
            },
          },
          annotations: {
            label: 'Annotations',
            icon: HighlighterIcon,
            config: {
              type: 'manyOf',
              values: ['Axis origin', 'Transform'],
              options: ['Axis origin', 'Transform', 'Vertex type'],
            },
          },
          mode: {
            label: 'Mode',
            icon: PaletteIcon,
            config: {
              type: 'oneOf',
              value: 'Fill',
              options: ['Draw', 'Fill', 'View'],
            },
          },
        },
      },
    },
    Component: (props) => {
      const [config, setConfig] = useState(props.ConfigMenu.config);

      return (
        <Fragment>
          <ConfigMenu
            {...props.ConfigMenu}
            config={config}
            onValueChange={setConfig}
          ></ConfigMenu>
        </Fragment>
      );
    },
    code: `
import { ConfigMenu } from 'preshape';

<ConfigMenu
  onValueChange={setConfig}
  config={{
    speed: {
      label: 'Speed',
      icon: GaugeIcon,
      config: {
        type: 'number',
        value: 1,
        min: 1,
        max: 10,
        step: 1,
        formatter: (value) => value,
      },
    },
    debug: {
      label: 'Debug',
      icon: BugIcon,
      config: {
        type: 'boolean',
        value: false,
        labelTrue: 'On',
        labelFalse: 'Off',
      },
    },
    annotations: {
      label: 'Annotations',
      icon: HighlighterIcon,
      config: {
        type: 'manyOf',
        values: ['Axis origin', 'Transform'],
        options: ['Axis origin', 'Transform', 'Vertex type'],
      },
    },
    mode: {
      label: 'Mode',
      icon: PaletteIcon,
      config: {
        type: 'oneOf',
        value: 'Fill',
        options: ['Draw', 'Fill', 'View'],
      },
    },
  }}
  />
    `,
  },
};

export default Item;
