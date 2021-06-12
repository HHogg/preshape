import * as React from 'react';
import { Box, Label, LabelProps, Icon } from 'preshape';
import TypeText from './TypeText';

interface Props extends LabelProps {
  hasInfo?: boolean;
  isArray?: boolean;
}

export default React.forwardRef<HTMLDivElement, Props & React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { children, hasInfo, isArray, ...rest } = props;

  return (
    <Label { ...rest } ref={ ref }>
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
    </Label>
  );
});
