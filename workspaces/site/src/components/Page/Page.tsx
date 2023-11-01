import { Appear, Box, Text, useMatchMedia } from 'preshape';
import { PropsWithChildren } from 'react';
import PageSummary, { PageSummaryConfig } from './PageSummary';

type PageProps = {
  title: string;
  description: string;
  summary?: PageSummaryConfig[];
};

export const Page = ({
  title,
  description,
  summary,
  children,
}: PropsWithChildren<PageProps>) => {
  const match = useMatchMedia(['1400px']);

  return (
    <Appear animation="Fade" flex="horizontal" gap="x16" grow>
      <Box
        basis="0"
        grow
        paddingHorizontal="x8"
        paddingVertical="x16"
        minWidth={0}
      >
        <Box flex="vertical" gap="x16" grow maxWidth="800px">
          <Box flex="horizontal">
            <Box basis="0" grow>
              <Text margin="x4" size="x8" weight="x3">
                {title}
              </Text>

              <Text textColor="text-shade-4" margin="x4" size="x5">
                {description}
              </Text>
            </Box>
          </Box>

          <Box>{children}</Box>
        </Box>
      </Box>

      {match('1400px') && (
        <Box maxWidth="300px">
          {summary && <PageSummary summary={summary} />}
        </Box>
      )}
    </Appear>
  );
};
