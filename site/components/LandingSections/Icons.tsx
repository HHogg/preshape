import * as React from 'react' ;
import { Box, Grid, GridItem, Icons, Link, Text } from 'preshape';
import LandingSection, { Props } from '../Landing/LandingSection';

export default (props: Props) => {
  return (
    <LandingSection { ...props }>
      <Text>
        Icons from
        the <Link href="https://github.com/feathericons/feather" isTextLink target="FeatherIcon">Feather Icon</Link> set,
        designed with an emphasis on simplicity, consistency, and flexibility. All can be
        used with <Link isTextLink to="/api/icon">Icons.[IconName]</Link>.
      </Text>

      <Grid
          gap="x3"
          margin="x10"
          repeatWidthMin="6rem">
        { Object.entries(Icons).map(([name, Icon]) => (
          <GridItem
              key={ name }
              padding="x3">
            <Box
                alignChildren="middle"
                flex="horizontal">
              <Icon size="28px" />
            </Box>

            <Text
                align="middle"
                ellipsis
                margin="x2"
                size="x2"
                strong>
              { name }
            </Text>
          </GridItem>
        ))
        }
      </Grid>
    </LandingSection>
  );
};
