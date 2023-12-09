import { CopyIcon, DropletIcon, Edit2Icon, StarIcon } from 'lucide-react';
import { Button, Buttons, Tooltip, TooltipProps } from 'preshape';
import { CatalogueItem } from '..';
import { Pictogram } from './pictograms/PictogramPlacement';

const Item: CatalogueItem<{
  Tooltip: TooltipProps;
}> = {
  name: 'Tooltip',
  description:
    'A tooltip component that can be used to render some content around something.',
  Pictogram,
  apis: [
    {
      module: '"Tooltip/Tooltip"',
      name: 'TooltipProps',
      rename: 'Tooltip',
    },
  ],
  showcase: {
    state: {
      Tooltip: {
        content: null,
        placement: 'top-start',
        trigger: 'hover',
        visible: true,
      },
    },
    Component: (props) => (
      <Tooltip
        {...props.Tooltip}
        borderRadius="x1"
        paddingHorizontal="x1"
        paddingVertical="x1"
        content={
          <Buttons joined>
            <Button variant="tertiary">
              <Edit2Icon name="Pencil" size="16px" />
            </Button>

            <Button variant="tertiary">
              <CopyIcon name="Copy" size="16px" />
            </Button>

            <Button variant="tertiary">
              <DropletIcon name="Water" size="16px" />
            </Button>
          </Buttons>
        }
      >
        <StarIcon name="Star" size="2rem" />
      </Tooltip>
    ),
    code: `
import { Tooltip } from 'preshape';

<Tooltip
  borderRadius="x1"
  content={
    <Buttons joined>
      ...
    </Buttons>
  }
>
  ...
</Tooltip>
    `,
  },
};

export default Item;
