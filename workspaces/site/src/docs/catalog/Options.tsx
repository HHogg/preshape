import { useEffect, useMemo, useState } from 'react';
import {
  Box,
  Icons,
  Input,
  InputLabel,
  Options,
  OptionsProps,
  Option,
  OptionProps,
  Placement,
  PlacementReference,
  PlacementOpenCondition,
  PlacementContent,
} from 'preshape';
import { CatalogueItem } from '..';
import Pictogram from './pictograms/PictogramOptions';

const Item: CatalogueItem<{
  Options: OptionsProps;
  Option: OptionProps;
}> = {
  name: 'Options',
  description:
    'A multi-selection list component that can be used inline or as a dropdown.',
  Pictogram,
  apis: [
    {
      module: '"Options/Option"',
      name: 'OptionProps',
      rename: 'Option',
    },
    {
      module: '"Options/Options"',
      name: 'OptionsProps',
      rename: 'Options',
    },
  ],
  showcase: {
    state: {
      Options: {},
      Option: {},
    },
    Component: (props) => {
      const [values, setValues] = useState<{ [key: string]: boolean }>({});

      const handleSelect = (index: number) => {
        if (props.Option.multiselect) {
          setValues({ ...values, [index]: !values[index] });
        } else {
          setValues({ [index]: !values[index] });
        }
      };

      const value = useMemo(() => {
        const selected = Object.entries(values).filter(([, v]) => v);

        if (!selected.length) {
          return 'Select an option';
        } else if (selected.length === 1) {
          return `Option ${+selected[0][0] + 1} selected`;
        }

        return `${selected.length} options selected`;
      }, [values]);

      useEffect(() => {
        setValues({});
      }, [props.Option.multiselect]);

      return (
        <Box maxWidth="16rem">
          <Placement
            placement="bottom"
            setContentWidthAsReferenceWidth
            trigger="click"
          >
            <PlacementReference>
              <InputLabel>
                <Input
                  addonEnd={
                    <PlacementOpenCondition
                      opened={<Icons.ChevronUp size="24px" />}
                      closed={<Icons.ChevronDown size="24px" />}
                    />
                  }
                  readOnly
                  value={value}
                />
              </InputLabel>
            </PlacementReference>

            <PlacementContent animation="FadeSlideDown">
              <Options {...props.Options} maxHeight="10rem" overflow="auto">
                {Array.from({ length: 10 }).map((_, index) => (
                  <Option
                    {...props.Option}
                    checked={!!values[index]}
                    key={index}
                    onChange={() => handleSelect(index)}
                  >
                    Option {index + 1}
                  </Option>
                ))}
              </Options>
            </PlacementContent>
          </Placement>
        </Box>
      );
    },
    code: `
import { Options, Option } from 'preshape';

<Options>
  <Option>Option 1</Option>
  <Option>Option 2</Option>
</Options>
    `,
  },
};

export default Item;
