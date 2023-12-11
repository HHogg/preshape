import {
  BugIcon,
  GaugeIcon,
  HighlighterIcon,
  PaletteIcon,
  SaveIcon,
} from 'lucide-react';
import { ConfigMenu, ConfigMenuProps, MenuConfig } from 'preshape';
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
        config: [],
      },
    },
    Component: (props) => {
      const [speed, setSpeed] = useState(1);
      const [debug, setDebug] = useState(false);
      const [annotations, setAnnotations] = useState([
        'Axis origin',
        'Transform',
      ]);
      const [mode, setMode] = useState('Fill');

      const config: MenuConfig = [
        {
          label: 'Speed',
          icon: GaugeIcon,
          config: {
            type: 'number',
            value: speed,
            min: 1,
            max: 10,
            step: 1,
            formatter: (value) => `${value}x`,
            onChange: setSpeed,
          },
        },
        {
          label: 'Debug',
          icon: BugIcon,
          config: {
            type: 'boolean',
            value: debug,
            labelTrue: 'On',
            labelFalse: 'Off',
            onChange: setDebug,
          },
        },
        {
          label: 'Annotations',
          icon: HighlighterIcon,
          config: {
            type: 'manyOf',
            value: annotations,
            options: ['Axis_origin', 'Transform', 'Vertex_type'],
            onChange: setAnnotations,
            formatter: (value) => value.replace('_', ' '),
          },
        },
        {
          label: 'Mode',
          icon: PaletteIcon,
          config: {
            type: 'oneOf',
            value: mode,
            options: ['Draw', 'Fill', 'View'],
            onChange: setMode,
            formatter: (value) => value.replace('_', ' '),
          },
        },
        {
          label: 'Save',
          icon: SaveIcon,
          config: {
            type: 'action',
            onAction: () => {},
          },
        },
        {
          label: 'Save As',
          icon: SaveIcon,
          config: {
            type: 'actions',
            actions: [
              {
                label: 'PNG',
                onAction: () => {},
              },
              {
                label: 'SVG',
                onAction: () => {},
              },
            ],
          },
        },
      ];

      return (
        <Fragment>
          <ConfigMenu {...props.ConfigMenu} config={config}></ConfigMenu>
        </Fragment>
      );
    },
    code: `
import { ConfigMenu } from 'preshape';

<ConfigMenu
  config={[
    {
      label: 'Speed',
      icon: GaugeIcon,
      config: {
        type: 'number',
        value: speed,
        min: 1,
        max: 10,
        step: 1,
        formatter: (value) => value,
        onChange: setSpeed,
      },
    },
    {
      label: 'Debug',
      icon: BugIcon,
      config: {
        type: 'boolean',
        value: debug,
        labelTrue: 'On',
        labelFalse: 'Off',
        onChange: setDebug,
      },
    },
    {
      label: 'Annotations',
      icon: HighlighterIcon,
      config: {
        type: 'manyOf',
        value: annotations,
        options: ['Axis_origin', 'Transform', 'Vertex_type'],
        onChange: setAnnotations,
        formatter: (value) => value.replace('_', ' '),
      },
    },
    {
      label: 'Mode',
      icon: PaletteIcon,
      config: {
        type: 'oneOf',
        value: mode,
        options: ['Draw', 'Fill', 'View'],
        onChange: setMode,
        formatter: (value) => value.replace('_', ' '),
      },
    },
    {
      label: 'Save',
      icon: SaveIcon,
      config: {
        type: 'action',
        onAction: () => {},
      },
    },
  ]}
/>
    `,
  },
};

export default Item;
