import { CircleIcon, TriangleIcon } from 'lucide-react';
import { Toggle, ToggleProps } from 'preshape';
import { useEffect, useState } from 'react';
import { CatalogueItem } from '..';
import { Pictogram } from './pictograms/PictogramToggle';

const Item: CatalogueItem<{
  Toggle: ToggleProps;
}> = {
  name: 'Toggle',
  description: 'An on/off styled toggle switch indicator',
  Pictogram,
  apis: [
    {
      module: '"Toggle/Toggle"',
      name: 'ToggleProps',
      rename: 'Toggle',
    },
  ],
  showcase: {
    state: {
      Toggle: {
        value: false,
      },
    },
    Component: (props) => {
      const [value, onChange] = useState(false);

      useEffect(() => {
        onChange(props.Toggle.value || false);
      }, [props]);

      return (
        <Toggle
          {...props.Toggle}
          iconOff={<TriangleIcon size={12} />}
          iconOn={<CircleIcon size={12} />}
          onChange={onChange}
          size={32}
          value={value}
        />
      );
    },
    code: `
import { Icons, Toggle } from 'preshape';

<Toggle
  iconOff={<TriangleIcon size={12} />}
  iconOn={<CircleIcon size={12} />}
  onChange={onChange}
  size={32}
  value={value}
/>
    `,
  },
};

export default Item;
