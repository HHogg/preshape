import { Button, Buttons, Icons, Tooltip, TooltipProps } from 'preshape';
import { CatalogueItem } from '..';
import Pictogram from './pictograms/PictogramPlacement';

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
        placement: 'top',
        trigger: 'hover',
        visible: true,
      },
    },
    Component: (props) => (
      <Tooltip
        {...props.Tooltip}
        borderRadius="x1"
        content={
          <Buttons joined>
            <Button variant="tertiary">
              <Icons.Edit2 name="Pencil" size="16px" />
            </Button>

            <Button variant="tertiary">
              <Icons.Copy name="Copy" size="16px" />
            </Button>

            <Button variant="tertiary">
              <Icons.Droplet name="Water" size="16px" />
            </Button>
          </Buttons>
        }
        paddingHorizontal="x1"
        paddingVertical="x1"
      >
        <Icons.Star name="Star" size="2rem" />
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
