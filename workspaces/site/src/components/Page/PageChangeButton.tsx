import { Button, Icons, Text } from 'preshape';

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
      size="x3"
    >
      {direction === 'previous' && <Icons.ChevronLeft size="1.5rem" />}

      <Text basis="0" grow weak size="x4">
        <Text size="x5" strong>
          {title}
        </Text>
        {description && <Text size="x3">{description}</Text>}
      </Text>

      {direction === 'next' && <Icons.ChevronRight size="1.5rem" />}
    </Button>
  );
};

export default PageChangeButton;
