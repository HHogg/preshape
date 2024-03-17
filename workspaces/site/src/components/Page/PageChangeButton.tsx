import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Button, Text } from 'preshape';

type PageChangeButtonProps = {
  description?: string;
  direction: 'next' | 'previous';
  title: string;
  to: string;
};

const PageChangeButton = ({
  to,
  title,
  description,
  direction,
}: PageChangeButtonProps) => {
  return (
    <Button
      gap="x2"
      to={to}
      variant="tertiary"
      uppercase={false}
      maxWidth="100%"
      weight="x1"
      size="x3"
      textColor="text-shade-1"
      textColorHover="text-shade-1"
      textColorActive="text-shade-1"
    >
      {direction === 'previous' && <ChevronLeftIcon size="1.5rem" />}

      <Text basis="0" grow size="x4">
        <Text margin="x1" strong>
          {title}
        </Text>

        {description && <Text size="x3">{description}</Text>}
      </Text>

      {direction === 'next' && <ChevronRightIcon size="1.5rem" />}
    </Button>
  );
};

export default PageChangeButton;
