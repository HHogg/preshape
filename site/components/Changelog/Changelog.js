import React, { Component } from 'react';
import { Base, Markdown, Text } from 'preshape';
import changelog from '../../../CHANGELOG.md';

export default class Changelog extends Component {
  render() {
    return (
      <Base>
        <Text
            backgroundColor="text-shade-2"
            color="background-shade-1"
            paddingHorizontal="x6"
            paddingVertical="x3"
            strong>
          CHANGELOG.md
        </Text>
        <Base
            borderColor="shade-2"
            borderSize="x2"
            padding="x6">
          <Markdown>
            { changelog || '' }
          </Markdown>
        </Base>
      </Base>
    );
  }
}
