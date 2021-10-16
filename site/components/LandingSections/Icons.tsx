import * as React from 'react' ;
import { icons, Box, Grid, GridItem, Icon, Link, Text } from 'preshape';
import LandingSection, { Props } from '../Landing/LandingSection';

export default (props: Props) => {
  return (
    <LandingSection { ...props }>
      <Text>
        A selected set of icons from
        the <Link href="https://github.com/feathericons/feather" isTextLink target="FeatherIcon">Feather Icon</Link> set,
        designed with an emphasis on simplicity, consistency, and flexibility. All can be
        used with the <Link isTextLink to="/api/icon">Icon component</Link>.
      </Text>

      <Grid
          gap="x3"
          margin="x10"
          repeatWidthMin="6rem">
        { icons.map((icon) => (
          <GridItem
              key={ icon }
              padding="x3">
            <Box
                alignChildren="middle"
                flex="horizontal">
              <Icon name={ icon } size="28px" />
            </Box>

            <Text
                align="middle"
                ellipsis
                margin="x2"
                size="x2"
                strong>
              { icon }
            </Text>
          </GridItem>
        ))
        }
      </Grid>
    </LandingSection>
  );
};
