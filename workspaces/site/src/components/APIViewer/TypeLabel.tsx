import React, { forwardRef, HTMLAttributes } from 'react';
import { Box, Button, ButtonProps, Icons } from 'preshape';
import TypeText from './TypeText';

interface Props extends ButtonProps {
  hasInfo?: boolean;
  isArray?: boolean;
}

const TypeLabel = forwardRef<
  HTMLButtonElement,
  Props & HTMLAttributes<HTMLButtonElement>
>(function TypeLabel(props, ref) {
  const { children, hasInfo, isArray, ...rest } = props;

  return (
    <Button {...rest} borderRadius="x3" ref={ref} size="x1">
      <TypeText isArray={isArray}>
        <Box alignChildrenVertical="middle" flex="horizontal" gap="x1">
          <Box>{children}</Box>

          {hasInfo && (
            <Box>
              <Icons.Info name="Info" size="14px" />
            </Box>
          )}
        </Box>
      </TypeText>
    </Button>
  );
});

export default TypeLabel;
