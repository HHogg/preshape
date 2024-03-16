import { Box, BoxProps } from 'preshape';
import { ReactNode } from 'react';
import GithubLink from '../GithubLink/GithubLink';

interface Props extends BoxProps {
  children: ReactNode;
  file: string;
}

const Showcase = ({ basis, children, file }: Props) => {
  return (
    <Box
      backgroundColor="background-shade-3"
      borderColor="background-shade-4"
      borderRadius="x3"
      borderSize="x2"
      flex="vertical"
      gap="x3"
      grow
      paddingHorizontal="x3"
      paddingVertical="x3"
    >
      <Box alignChildrenVertical="middle" flex="horizontal" gap="x4">
        <Box flex="horizontal" gap="x1" grow>
          <Box
            backgroundColor="negative-shade-3"
            borderColor="background-shade-4"
            borderRadius="full"
            height="0.5rem"
            width="0.5rem"
          />

          <Box
            backgroundColor="highlight"
            borderColor="background-shade-4"
            borderRadius="full"
            height="0.5rem"
            width="0.5rem"
          />

          <Box
            backgroundColor="positive-shade-3"
            borderColor="background-shade-4"
            borderRadius="full"
            height="0.5rem"
            width="0.5rem"
          />
        </Box>
      </Box>

      <Box
        backgroundColor="background-shade-1"
        basis={basis}
        borderColor="background-shade-4"
        borderRadius="x2"
        borderSize="x2"
        container
        flex="vertical"
        grow
        minHeight="300px"
        overflow="auto"
        paddingHorizontal="x6"
        paddingVertical="x12"
        shrink
      >
        <Box style={{ margin: 'auto', maxWidth: '100%' }}>{children}</Box>

        <Box absolute="top-right" paddingTop="x2" paddingRight="x2">
          <GithubLink
            href={`https://github.com/HHogg/preshape/blob/master/workspaces/site/src/docs/catalog/${file}.tsx`}
            target="PreshapeCodeExample"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Showcase;
