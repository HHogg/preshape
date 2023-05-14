import { Box, Grid, Link, Text } from 'preshape';
import { catalogueListing } from '../docs';
import { Page } from '../components/Page/Page';

export const ComponentsPage = () => {
  return (
    <Page
      description="A collection of React Components to provide the building blocks for UIs."
      summary={[{ name: 'Components', children: catalogueListing }]}
      title="Components"
    >
      <Grid gap="x8" margin="x6" repeatWidthMin="200px">
        {catalogueListing.map(({ name, description, Pictogram }) => (
          <Link
            backgroundColor="background-shade-1"
            borderColor="background-shade-3"
            borderRadius="x3"
            borderSize="x2"
            flex="vertical"
            gap="x4"
            id={name}
            padding="x2"
            key={name}
            rel="nofollow"
            to={`/components/${name}`}
          >
            <Box>
              <Box
                backgroundColor="background-shade-2"
                borderRadius="x3"
                padding="x2"
              >
                <Pictogram />
              </Box>
            </Box>

            <Box paddingHorizontal="x3" paddingBottom="x3">
              <Text margin="x1" strong>
                {name}
              </Text>

              <Text margin="x1" size="x3" tag="div" textColor="text-shade-4">
                {description}
              </Text>
            </Box>
          </Link>
        ))}
      </Grid>
    </Page>
  );
};
