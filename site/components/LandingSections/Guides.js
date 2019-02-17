import React, { Component, Fragment } from 'react';
import { Flex, Icon, Link, Markdown, Separator, Text } from 'preshape';
import guideList from '../Guides';
import LandingSection from '../Landing/LandingSection';

export default class Guides extends Component {
  render() {
    return (
      <LandingSection { ...this.props }>
        <Text margin="x3">
          A brief selections of guides to Preshape and its patterns.
        </Text>

        { guideList.map(({ name, to, description }, index, { length }) => (
          <Fragment key={ to }>
            <Link display="block" paddingVertical="x4" to={ to }>
              <Flex
                  alignChildrenVertical="middle"
                  direction="horizontal"
                  gutter="x4">
                <Flex>
                  <Icon name="File" size="1.5rem" />
                </Flex>

                <Flex grow shrink>
                  <Text margin="x1" strong>{ name }</Text>
                  <Text Component="div" margin="x1" size="x1" weak>
                    <Markdown>{ description }</Markdown>
                  </Text>
                </Flex>
              </Flex>
            </Link>

            { index < length - 1 && (
              <Separator />
            ) }
          </Fragment>
        )) }
      </LandingSection>
    );
  }
}
