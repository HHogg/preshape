import React, { Component } from 'react';
import { Flex, Grid, GridItem, Link, Responsive, Text } from 'preshape';
import { widthMedium, widthSmall } from '../Root';
import BuiltWithHoggIo from './BuiltWithHoggIo';
import BuiltWithPreshape from './BuiltWithPreshape';
import BuiltWithSnakeHeuristics from './BuiltWithSnakeHeuristics';

const builtWith = [{
  name: 'Snake Heuristics',
  href: 'https://snake.hogg.io',
  description: 'A game for developers to write an optimal heuristic function for the perfect game of snake.',
  Image: BuiltWithSnakeHeuristics,
}, {
  name: 'Hogg.io',
  href: 'https://hogg.io',
  description: 'My personal website to list my professional experience, personal experiments and side projects.',
  Image: BuiltWithHoggIo,
}, {
  name: 'Preshape Style Guide',
  href: 'https://Preshape.hogg.io',
  description: 'Preshape Style Guide for guidance and component API documentation.',
  Image: BuiltWithPreshape,
}];

export default class BuiltWithGrid extends Component {
  render() {
    return (
      <Responsive queries={ [widthSmall, widthMedium] }>
        { (match) => (
          <Grid { ...this.props }
              columnCount={ match({
                [widthMedium]: '3',
                [widthSmall]: '2',
              }) || '1' }
              columnWidth="1fr"
              gap="x4">
            { builtWith.map(({ name, description, href, Image }) => (
              <GridItem
                  Component={ Flex }
                  borderColor
                  borderSize="x2"
                  direction="vertical"
                  key={ name }>
                <Flex>
                  <Image />
                </Flex>

                <Flex grow paddingHorizontal="x3" paddingVertical="x4">
                  <Text margin="x1" strong>{ name }</Text>
                  <Text color="shade-3" margin="x1" size="small">{ description }</Text>
                </Flex>

                <Flex
                    backgroundColor="text-shade-1"
                    color="background-shade-1">
                  <Link
                      align="end"
                      display="block"
                      href={ href }
                      paddingHorizontal="x3"
                      paddingVertical="x2"
                      size="small"
                      strong
                      uppercase>Check it out</Link>
                </Flex>
              </GridItem>
            )) }
          </Grid>
        ) }
      </Responsive>
    );
  }
}
