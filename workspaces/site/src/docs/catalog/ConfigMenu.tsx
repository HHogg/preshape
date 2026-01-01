import {
  AlertTriangleIcon,
  BugIcon,
  CodeIcon,
  GaugeIcon,
  HighlighterIcon,
  PaletteIcon,
  SaveIcon,
  ScaleIcon,
  Settings2Icon,
} from 'lucide-react';
import {
  ConfigMenu,
  ConfigMenuProps,
  MenuConfig,
  MenuConfigEntryAction,
  MenuConfigEntryActions,
  MenuConfigEntryBoolean,
  MenuConfigEntryManyOf,
  MenuConfigEntryNumber,
  MenuConfigEntryOneOf,
  MenuConfigEntrySubmenu,
} from 'preshape';
import { useState } from 'react';
import { CatalogueItem } from '..';
import { Pictogram } from './pictograms/PictogramConfigMenu';
import { MenuConfigEntryRange } from 'preshape/src/ConfigMenu/utils';

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
      const [developerMode, setDeveloperMode] = useState(false);
      const [annotations, setAnnotations] = useState<Annotation[]>([
        'Axis_origin',
        'Transform',
      ]);
      const [mode, setMode] = useState<Mode>('Fill');
      const [alertRange, setAlertRange] = useState<[number, number]>([25, 75]);
      const [weight, setWeight] = useState(0.5);

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

      const developerModeConfig: MenuConfigEntryBoolean = {
        label: 'Developer mode',
        icon: CodeIcon,
        type: 'boolean',
        value: developerMode,
        labelTrue: 'On',
        labelFalse: 'Off',
        onChange: setDeveloperMode,
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

      const alertRangeConfig: MenuConfigEntryRange<[number, number]> = {
        label: 'Alert Range',
        description: 'The range of values that will trigger an alert',
        icon: AlertTriangleIcon,
        type: 'range',
        value: alertRange,
        min: 0,
        max: 100,
        step: 1,
        onChange: setAlertRange,
        formatter: (value) => `${value}%`,
      };

      const weightConfig: MenuConfigEntryRange<number> = {
        label: 'Weight',
        icon: ScaleIcon,
        type: 'range',
        value: weight,
        min: 0,
        max: 1,
        step: 0.001,
        onChange: setWeight,
        formatter: (value) => `${value.toFixed(3)}`,
      };

      const submenuConfig: MenuConfigEntrySubmenu = {
        label: 'Advanced',
        description: 'Advanced settings that are hidden in a submenu',
        icon: Settings2Icon,
        type: 'submenu',
        config: [
          alertRangeConfig,
          debugConfig,
          developerModeConfig,
          weightConfig,
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
        submenuConfig,
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
