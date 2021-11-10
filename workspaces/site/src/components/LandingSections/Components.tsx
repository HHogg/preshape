import * as React from 'react' ;
import { Box, Grid, Link, Text } from 'preshape';
import docs from '../Documentation/docs';
import LandingSection, { Props } from '../Landing/LandingSection';

export default (props: Props) => {
  return (
    <LandingSection { ...props }>
      <Text margin="x16">
        A collection of React Components to provide the building blocks
        for UIs.
      </Text>

      <Grid
          gap="x8"
          margin="x6"
          repeatWidthMin="240px">
        { Object
            .entries(docs)
            .filter(([, { type }]) => type === 'component')
            .map(([id, item]) => (
              <Link
                  borderColor="background-shade-3"
                  borderRadius="x3"
                  borderSize="x2"
                  display="block"
                  key={ id }
                  padding="x3"
                  rel="nofollow"
                  to={ `/api/${id}` }>
                <Box
                    backgroundColor="background-shade-2"
                    borderRadius="x3"
                    margin="x4"
                    paddingHorizontal="x8">
                  { item.pictogram && <item.pictogram /> }
                </Box>

                <Box paddingHorizontal="x4">
                  <Text margin="x1" strong>{ item.name }</Text>
                  <Text margin="x1" size="x3" tag="div">{ item.description }</Text>
                </Box>
              </Link>
            ))
        }
      </Grid>
    </LandingSection>
  );
};
