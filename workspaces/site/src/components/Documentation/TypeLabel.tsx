import { ExternalLinkIcon, InfoIcon } from 'lucide-react';
import { Box, Button, ButtonProps } from 'preshape';
import { forwardRef, HTMLAttributes } from 'react';
import TypeText from './TypeText';

interface Props extends ButtonProps {
  hasInfo?: boolean;
  href?: string;
  isArray?: boolean;
}

const TypeLabel = forwardRef<
  HTMLButtonElement,
  Props & HTMLAttributes<HTMLButtonElement>
>(function TypeLabel(props, ref) {
  const { children, hasInfo, href, isArray, ...rest } = props;
  const isExternalLink = !!href;

  return (
    <Button
      {...rest}
      borderRadius="x3"
      href={href}
      paddingHorizontal="x2"
      paddingVertical="x1"
      ref={ref}
      tag={isExternalLink ? 'a' : undefined}
      target={isExternalLink ? '_blank' : undefined}
    >
      <TypeText isArray={isArray}>
        <Box alignChildrenVertical="middle" flex="horizontal" gap="x1">
          <Box>{children}</Box>

          {hasInfo && (
            <Box>
              <InfoIcon size="14px" />
            </Box>
          )}

          {isExternalLink && (
            <Box>
              <ExternalLinkIcon size="14px" />
            </Box>
          )}
        </Box>
      </TypeText>
    </Button>
  );
});

export default TypeLabel;
