import React, { useState } from 'react';
import { Box, Code, Grid, GridItem, Icons, Link, Text } from 'preshape';
import LandingSection, { Props } from '../Landing/LandingSection';

const IconsSection = (props: Props) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <LandingSection {...props}>
      <Text>
        Icons from the{' '}
        <Link
          href="https://github.com/feathericons/feather"
          isTextLink
          target="FeatherIcon"
        >
          Feather Icon
        </Link>{' '}
        set, designed with an emphasis on simplicity, consistency, and
        flexibility. All can be used like{' '}
        <Code lang="jsx">{'<Icons.Activity />'}</Code>.
      </Text>

      <Grid gap="x3" margin="x10" repeatWidthMin="8rem">
        {Object.entries(Icons)
          .slice(0, showAll ? undefined : 6 * 4)
          .map(([name, Icon]) => (
            <GridItem key={name} padding="x3">
              <Box alignChildren="middle" flex="horizontal">
                <Icon size="28px" />
              </Box>

              <Text align="middle" ellipsis margin="x2" size="x3" strong>
                {name}
              </Text>
            </GridItem>
          ))}
      </Grid>

      {!showAll && (
        <Text align="middle">
          <Link isTextLink onClick={() => setShowAll(true)}>
            Show All
          </Link>
        </Text>
      )}
    </LandingSection>
  );
};

export default IconsSection;
