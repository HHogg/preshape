import { ChevronLeftIcon } from 'lucide-react';
import { PropsWithChildren } from 'react';
import { Appear, AppearProps } from '../Appear/Appear';
import { Box } from '../Box/Box';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';

type ContextMenuProps = {
  animation?: AppearProps['animation'];
  onBack?: () => void;
  title: string;
};

export default function Menu({
  animation = 'FadeSlideLeft',
  children,
  onBack,
  title,
}: PropsWithChildren<ContextMenuProps>) {
  return (
    <Appear animation={animation} delay={100} visible>
      <Box
        alignChildrenVertical="middle"
        borderBottom
        borderColor="background-shade-4"
        flex="horizontal"
        gap="x3"
        paddingBottom="x2"
        paddingHorizontal="x3"
      >
        {onBack && (
          <Box>
            <Button
              flex="vertical"
              padding="x1"
              onClick={() => onBack()}
              variant="tertiary"
            >
              <ChevronLeftIcon size="1rem" />
            </Button>
          </Box>
        )}

        <Box grow>
          <Text weight="x2">{title}</Text>
        </Box>

        <Box width="1rem" />
      </Box>

      <Box margin="x2">{children}</Box>
    </Appear>
  );
}
