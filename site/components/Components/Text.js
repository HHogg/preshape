import React, { Component } from 'react';
import { Text } from 'preshape';
import onEdit from '../Component/onEdit';
import DocumentationPage from '../Documentation/DocumentationPage';
import ComponentExample from '../Component/ComponentExample';
import ComponentPropsTable from '../Component/ComponentPropsTable';

export default class ComponentText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Text: {

      },
    };
  }

  render() {
    return (
      <DocumentationPage { ...this.props }>
        <ComponentExample>
          <Text heading size="x5" { ...this.state.Text } margin="x3">
            The spectacle before us was indeed sublime.
          </Text>

          <Text>
            Apparently we had reached a great height in the atmosphere,
            for the sky was a dead black, and the stars had ceased
            to twinkle. By the same illusion which lifts the horizon
            of the sea to the level of the spectator on a hillside,
            the sable cloud beneath was dished out, and the car seemed
            to float in the middle of an immense dark sphere, whose
            upper half was strewn with silver. Looking down into the
            dark gulf below, I could see a ruddy light streaming
            through a rift in the clouds.
          </Text>

          <Text heading size="x4" { ...this.state.Text } margin="x3">
            The spectacle before us was indeed sublime.
          </Text>

          <Text size="x1">
            Apparently we had reached a great height in the atmosphere,
            for the sky was a dead black, and the stars had ceased
            to twinkle. By the same illusion which lifts the horizon
            of the sea to the level of the spectator on a hillside,
            the sable cloud beneath was dished out, and the car seemed
            to float in the middle of an immense dark sphere, whose
            upper half was strewn with silver. Looking down into the
            dark gulf below, I could see a ruddy light streaming
            through a rift in the clouds.
          </Text>

        </ComponentExample>

        <ComponentPropsTable
            components={ [ require('!!@brandwatch/axiom-documentation-loader!../../../src/Text/Text') ] }
            onEdit={ (...args) => this.setState((state) => onEdit(state, ...args)) }
            values={ this.state } />
      </DocumentationPage>
    );
  }
}
