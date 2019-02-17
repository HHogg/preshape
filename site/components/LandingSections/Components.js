import React, { Component } from 'react';
import { Flex, Grid, GridItem, Link, Markdown, Responsive, Text } from 'preshape';
import { widthMedium, widthSmall } from '../Root';
import componentsList from '../Components';
import LandingSection from '../Landing/LandingSection';

export default class Components extends Component {
  render() {
    return (
      <LandingSection { ...this.props }>
        <Text margin="x3">
          A collection of React Components to provide the building blocks
          for UIs.
        </Text>

        <Responsive queries={ [widthSmall, widthMedium] }>
          { (match) => (
            <Grid
                columnCount={ match({
                  [widthMedium]: '3',
                  [widthSmall]: '2',
                }) || '1' }
                columnWidth="1fr"
                gap="x4"
                margin="x6">
              { componentsList.map(({ name, description, to }) => (
                <GridItem
                    Component={ Flex }
                    borderColor
                    borderSize="x2"
                    direction="vertical"
                    key={ name }>
                  <Flex grow paddingHorizontal="x3" paddingVertical="x4">
                    <Text margin="x1" strong>{ name }</Text>
                    <Text Component="div" color="shade-3" margin="x1" size="small">
                      <Markdown>{ description }</Markdown>
                    </Text>
                  </Flex>

                  <Flex
                      backgroundColor="text-shade-1"
                      color="background-shade-1">
                    <Link
                        align="end"
                        display="block"
                        paddingHorizontal="x3"
                        paddingVertical="x2"
                        size="small"
                        strong
                        to={ to }
                        uppercase>View Component</Link>
                  </Flex>
                </GridItem>
              )) }
            </Grid>
          ) }
        </Responsive>
      </LandingSection>
    );
  }
}
