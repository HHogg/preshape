import * as React from 'react';
import { Box, Button, ButtonProps, Icon } from 'preshape';
import TypeText from './TypeText';

interface Props extends ButtonProps {
  hasInfo?: boolean;
  isArray?: boolean;
}

export default React.forwardRef<HTMLButtonElement, Props & React.HTMLAttributes<HTMLButtonElement>>((props, ref) => {
  const { children, hasInfo, isArray, ...rest } = props;

  return (
    <Button { ...rest } borderRadius="x3" ref={ ref } size="x1">
      <TypeText isArray={ isArray }>
        <Box
            alignChildrenVertical="middle"
            flex="horizontal"
            gap="x1">
          <Box>
            { children }
          </Box>

          { hasInfo && (
            <Box>
              <Icon name="Info" size="14px" />
            </Box>
          ) }
        </Box>
      </TypeText>
    </Button>
  );
});
