import {
  BugIcon,
  GaugeIcon,
  HighlighterIcon,
  PaletteIcon,
  SaveIcon,
} from 'lucide-react';
import {
  ConfigMenu,
  ConfigMenuProps,
  MenuConfig,
  MenuConfigEntryAction,
  MenuConfigEntryBoolean,
  MenuConfigEntryManyOf,
  MenuConfigEntryNumber,
  MenuConfigEntryOneOf,
} from 'preshape';
import { MenuConfigEntryActions } from 'preshape/src/ConfigMenu/ConfigMenu';
import { useState } from 'react';
import { CatalogueItem } from '..';
import { Pictogram } from './pictograms/PictogramConfigMenu';

type Mode = 'Draw' | 'Fill' | 'View';
type Annotation = 'Axis_origin' | 'Transform' | 'Vertex_type';

const modeOptions: Mode[] = ['Draw', 'Fill', 'View'];
const annotationOptions: Annotation[] = [
  'Axis_origin',
  'Transform',
  'Vertex_type',
];

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
      const [annotations, setAnnotations] = useState<Annotation[]>([
        'Axis_origin',
        'Transform',
      ]);
      const [mode, setMode] = useState<Mode>('Fill');

      const speedConfig: MenuConfigEntryNumber = {
        label: 'Speed',
        icon: GaugeIcon,
        type: 'number',
        value: speed,
        min: 1,
        max: 10,
        step: 1,
        formatter: (value) => `${value}x`,
        onChange: setSpeed,
      };

      const debugConfig: MenuConfigEntryBoolean = {
        label: 'Debug',
        icon: BugIcon,
        type: 'boolean',
        value: debug,
        labelTrue: 'On',
        labelFalse: 'Off',
        onChange: setDebug,
      };

      const annotationsConfig: MenuConfigEntryManyOf<Annotation> = {
        label: 'Annotations',
        icon: HighlighterIcon,
        type: 'manyOf',
        value: annotations,
        options: annotationOptions,
        onChange: setAnnotations,
        formatter: (value) => value.replace('_', ' '),
      };

      const modeConfig: MenuConfigEntryOneOf<Mode> = {
        label: 'Mode',
        icon: PaletteIcon,
        type: 'oneOf',
        value: mode,
        options: modeOptions,
        onChange: setMode,
      };

      const saveConfig: MenuConfigEntryAction = {
        label: 'Save',
        icon: SaveIcon,
        type: 'action',
        onAction: () => {},
      };

      const saveAsConfig: MenuConfigEntryActions = {
        label: 'Save As',
        icon: SaveIcon,
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
      };

      const config: MenuConfig = [
        speedConfig,
        annotationsConfig,
        modeConfig,
        { type: 'divider' },
        saveConfig,
        saveAsConfig,
        { type: 'divider' },
        debugConfig,
      ];

      return <ConfigMenu {...props.ConfigMenu} config={config}></ConfigMenu>;
    },
    code: `
import {
  ConfigMenu,
  MenuConfig,
  MenuConfigEntryAction,
  MenuConfigEntryBoolean,
  MenuConfigEntryManyOf,
  MenuConfigEntryNumber,
  MenuConfigEntryOneOf,
} from 'preshape';

const [speed, setSpeed] = useState(1);
const [debug, setDebug] = useState(false);
const [annotations, setAnnotations] = useState<Annotation[]>([
  'Axis_origin',
  'Transform',
]);
const [mode, setMode] = useState<Mode>('Fill');

const speedConfig: MenuConfigEntryNumber = {
  label: 'Speed',
  icon: GaugeIcon,
  type: 'number',
  value: speed,
  min: 1,
  max: 10,
  step: 1,
  formatter: (value) => value,
  onChange: setSpeed,
};

const debugConfig: MenuConfigEntryBoolean = {
  label: 'Debug',
  icon: BugIcon,
  type: 'boolean',
  value: debug,
  labelTrue: 'On',
  labelFalse: 'Off',
  onChange: setDebug,
};

const annotationsConfig: MenuConfigEntryManyOf<Annotation> = {
  label: 'Annotations',
  icon: HighlighterIcon,
  type: 'manyOf',
  value: annotations,
  options: annotationOptions,
  onChange: setAnnotations,
  formatter: (value) => value.replace('_', ' '),
};

const modeConfig: MenuConfigEntryOneOf<Mode> = {
  label: 'Mode',
  icon: PaletteIcon,
  type: 'oneOf',
  value: mode,
  options: modeOptions,
  onChange: setMode,
};

const saveConfig: MenuConfigEntryAction = {
  label: 'Save',
  icon: SaveIcon,
  type: 'action',
  onAction: () => {},
};

const saveAsConfig: MenuConfigEntryActions = {
  label: 'Save As',
  icon: SaveIcon,
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
};

const config: MenuConfig = [
  speedConfig,
  debugConfig,
  annotationsConfig,
  modeConfig,
  saveConfig,
  saveAsConfig,
];

return (
  <ConfigMenu {...props.ConfigMenu} config={config}></ConfigMenu>
);
    `,
  },
};

export default Item;
