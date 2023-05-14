import { forwardRef, useEffect, useState } from 'react';
import { Appear } from '../Appear/Appear';
import { Box, BoxProps } from '../Box/Box';
import { Text } from '../Text/Text';
import { useFormContext } from './useFormContext';

/**
 * Form error component that is to be used with a parent Form
 * component that has been provided with form state form the
 * useForm hook.
 */
export interface FormErrorProps extends BoxProps {}

export const FormError = forwardRef<any, FormErrorProps>((props, ref) => {
  const { children, name, ...rest } = props;
  const { getError } = useFormContext();
  const error = name && getError(name);
  const [errorState, setErrorState] = useState(error);

  useEffect(() => {
    if (error) {
      setErrorState(error);
    }
  }, [error]);

  return (
    <Box {...rest} flex="vertical" grow ref={ref}>
      {children && <Box>{children}</Box>}

      <Appear animation="Expand" visible={!!error}>
        <Text align="end" size="x2" textColor="negative-shade-4" strong>
          {errorState?.toString()}
        </Text>
      </Appear>
    </Box>
  );
});
