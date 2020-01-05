import * as React from 'react' ;
import { useMediaQuery, Flex, Grid, GridItem, Link, Text } from 'preshape';
import { widthMedium, widthSmall } from '../Root';
import catalogue from '../Documentation/docs';
import LandingSection, { Props } from '../Landing/LandingSection';

export default (props: Props) => {
  const match = useMediaQuery([widthSmall, widthMedium]);

  return (
    <LandingSection { ...props }>
      <Text margin="x3">
        A collection of React Components to provide the building blocks
        for UIs.
      </Text>

      <Grid
          columnCount={ match({
            [widthMedium]: '3',
            [widthSmall]: '2',
          }) || '1' }
          columnWidth="1fr"
          gap="x4"
          margin="x6">
        { Object
            .entries(catalogue)
            .filter(([, { type }]) => type === 'component')
            .map(([id, item]) => (
              <GridItem
                  borderSize="x2"
                  direction="vertical"
                  key={ id }>
                <Flex grow paddingHorizontal="x3" paddingVertical="x4">
                  <Text margin="x1" strong>{ item.name }</Text>
                  <Text margin="x1" size="x1" tag="div">{ item.description }</Text>
                </Flex>

                <Flex
                    backgroundColor="text-shade-1"
                    textColor="background-shade-1">
                  <Link
                      align="end"
                      display="block"
                      paddingHorizontal="x3"
                      paddingVertical="x2"
                      size="x1"
                      strong
                      to={ `/api/${id}` }
                      uppercase>View Component</Link>
                </Flex>
              </GridItem>
            ))
        }
      </Grid>
    </LandingSection>
  );
};
