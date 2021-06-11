import * as React from 'react' ;
import {
  Box,
  Icon,
  Input,
  InputAddon,
  InputLabel,
  Options,
  OptionsProps,
  Option,
  OptionProps,
  Placement,
  PlacementManager,
  PlacementReference,
} from 'preshape';
import { CatalogueItem } from '.';
import Showcase from '../Showcase';

const Item: CatalogueItem<{
  Options: OptionsProps;
  Option: OptionProps;
}> = {
  name: 'Options',
  description: 'A multi-selection list component that can be used inline or as a dropdown.',
  pictogram: require('../../../assets/pictogram-options.svg').default,
  type: 'component',
  showcase: {
    Component: (props) => {
      const [values, setValues] = React.useState<{ [key: string]: boolean }>({});

      const handleSelect = (index: number) => {
        if (props.Option.multiselect) {
          setValues({ ...values, [index]: !values[index] });
        } else {
          setValues({ [index]: !values[index] });
        }
      };

      const value = React.useMemo(() => {
        const selected = Object.entries(values).filter(([, v]) => v);

        if (!selected.length) {
          return 'Select an option';
        } else if (selected.length === 1) {
          return `Option ${+selected[0][0] + 1} selected`;
        }

        return `${selected.length} options selected`;
      }, [values]);

      React.useEffect(() => {
        setValues({});
      }, [props.Option.multiselect]);

      return (
        <Showcase>
          <Box maxWidth="16rem">
            <PlacementManager trigger="click">
              <PlacementReference>
                { (props, { visible }) => (
                  <InputLabel { ...props } >
                    <Input
                        readOnly
                        value={ value } />
                    <InputAddon>
                      <Icon
                          name={ visible ? 'ChevronUp' : 'ChevronDown' }
                          size="1.5rem" />
                    </InputAddon>
                  </InputLabel>
                ) }
              </PlacementReference>

              <Placement
                  elevate
                  minWidth="reference"
                  options={ {
                    modifiers: {
                      preventOverflow: {
                        boundariesElement: 'window',
                      },
                    },
                  } }
                  placement="bottom"
                  zIndex={ 1 }>
                <Options { ...props.Options }
                    maxHeight="10rem"
                    scrollable>
                  { Array.from({ length: 10 }).map((_, index) => (
                    <Option { ...props.Option }
                        checked={ !!values[index] }
                        key={ index }
                        onChange={ () => handleSelect(index) }>
                      Option { index + 1 }
                    </Option>
                  )) }
                </Options>
              </Placement>
            </PlacementManager>
          </Box>
        </Showcase>
      );
    },
    state: {
      Options: {},
      Option: {},
    },
  },
  apis: [{
    module: '"Options/Option"',
    name: 'OptionProps',
    rename: 'Option',
  }, {
    module: '"Options/Options"',
    name: 'OptionsProps',
    rename: 'Options',
  }],
};

export default Item;
