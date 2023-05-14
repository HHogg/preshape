import {
  Box,
  CodeBlock,
  CodeWindow,
  Grid,
  GridItem,
  Icons,
  Text,
} from 'preshape';
import { Page } from '../components/Page/Page';
import { PageSection } from '../components/Page/PageSection';
import { PageSubtitle } from '../components/Page/PageSubtitle';

export const IconsPage = () => {
  return (
    <Page
      description="Icons from the Feather icon set"
      summary={[
        {
          name: 'Icons',
          children: Object.keys(Icons).map((name) => ({ name })),
        },
      ]}
      title="Icons"
    >
      <PageSection>
        <PageSubtitle>Example usage</PageSubtitle>
        <CodeWindow>
          <CodeBlock language="tsx" size="x3">
            {`import { Icons } from 'preshape';

<Icons.ArrowDown size="1rem" />`}
          </CodeBlock>
        </CodeWindow>
      </PageSection>

      <PageSection>
        <PageSubtitle>Options</PageSubtitle>
        <Grid gap="x3" margin="x10" repeatWidthMin="8rem">
          {Object.entries(Icons).map(([name, Icon]) => (
            <GridItem id={name} key={name} padding="x3">
              <Box alignChildren="middle" flex="horizontal">
                <Icon size="28px" />
              </Box>

              <Text align="middle" ellipsis margin="x2" size="x3" strong>
                {name}
              </Text>
            </GridItem>
          ))}
        </Grid>
      </PageSection>
    </Page>
  );
};
