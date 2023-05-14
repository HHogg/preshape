import { Box, BoxProps } from 'preshape';

interface Props extends BoxProps {}

const PageSection = (props: Props) => {
  return <Box {...props} margin="x16" />;
};

export default PageSection;
