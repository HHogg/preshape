import * as React from 'react' ;
import { Flex, Grid, Link, Text } from 'preshape';
import docs from '../Documentation/docs';
import LandingSection, { Props } from '../Landing/LandingSection';

export default (props: Props) => {
  return (
    <LandingSection { ...props }>
      <Text margin="x3">
        A collection of React Components to provide the building blocks
        for UIs.
      </Text>

      <Grid
          gap="x6"
          margin="x6"
          repeatWidthMin="240px">
        { Object
            .entries(docs)
            .filter(([, { type }]) => type === 'component')
            .map(([id, item]) => (
              <Link
                  borderSize="x2"
                  display="block"
                  key={ id }
                  padding="x3"
                  rel="nofollow"
                  to={ `/api/${id}` }>
                <Flex margin="x2">
                  { item.pictogram && <item.pictogram /> }
                </Flex>
                <Text margin="x1" strong>{ item.name }</Text>
                <Text margin="x1" size="x1" tag="div">{ item.description }</Text>
              </Link>
            ))
        }
      </Grid>
    </LandingSection>
  );
};
