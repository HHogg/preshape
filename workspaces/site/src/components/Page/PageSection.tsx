import { Box, BoxProps } from 'preshape';

type Props = BoxProps;

export const PageSection = (props: Props) => {
  return <Box {...props} margin="x16" />;
};
