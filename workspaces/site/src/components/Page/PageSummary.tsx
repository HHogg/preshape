import { Appear, Box, Button, Text } from 'preshape';
import { PropsWithChildren } from 'react';

type PageSummaryProps = {
  summary: PageSummaryConfig[];
};

export type PageSummaryConfig = {
  name: string;
  children?: PageSummaryConfig[];
};

const PageSummary = ({ summary }: PropsWithChildren<PageSummaryProps>) => {
  return (
    <Appear
      animation="FadeSlideLeft"
      delay={200}
      paddingVertical="x16"
      maxHeight="100vh"
      overflow="auto"
      style={{ position: 'sticky', top: 0 }}
      paddingRight="x8"
    >
      <Text textColor="text-shade-4" margin="x4" size="x5">
        On this page
      </Text>

      {summary.map(({ name, children }) => (
        <Box key={name} margin="x3">
          <Text size="x2" weight="x2">
            <Button
              alignChildren="start"
              paddingLeft="x3"
              href={`#${name}`}
              size="x1"
              tag="a"
              variant="tertiary"
              width="100%"
              uppercase={false}
            >
              <Text size="x4">{name}</Text>
            </Button>
          </Text>

          {!!children?.length && (
            <Box paddingLeft="x3">
              <Box
                borderColor="background-shade-3"
                borderSize="x2"
                borderLeft
                margin="x1"
              >
                {children.map(({ name }) => (
                  <Box key={name}>
                    <Button
                      alignChildren="start"
                      href={`#${name}`}
                      paddingLeft="x3"
                      paddingVertical="x1"
                      tag="a"
                      variant="tertiary"
                      weight="x1"
                      width="100%"
                      uppercase={false}
                    >
                      <Text size="x3">{name}</Text>
                    </Button>
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </Box>
      ))}
    </Appear>
  );
};

export default PageSummary;
