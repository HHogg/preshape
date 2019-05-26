import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {
  SwitchTransition,
  Tab,
  Tabs,
  TabContent,
  Text,
} from 'preshape';
import onEdit from '../Component/onEdit';
import DocumentationPage from '../Documentation/DocumentationPage';
import ComponentExample from '../Component/ComponentExample';
import ComponentPropsTable from '../Component/ComponentPropsTable';

export default class ComponentSwitchTransition extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <DocumentationPage { ...this.props }>
        <ComponentExample>
          <Tabs>
            <Route children={ ({ history, match }) => (
              <Tab
                  active={ !!match }
                  onClick={ () => history.push('/components/switch-transition') }>Routed Tab 1</Tab>
            ) } exact path="/components/switch-transition" />

            <Route children={ ({ history, match }) => (
              <Tab
                  active={ !!match }
                  onClick={ () => history.push('/components/switch-transition/1') }>Routed Tab 2</Tab>
            ) } exact path="/components/switch-transition/1" />
          </Tabs>

          <TabContent padding="x3">
            <SwitchTransition>
              <Route exact path="/components/switch-transition" render={ () => (
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean sed risus ex. Aliquam blandit vitae enim at vestibulum.
                  Quisque aliquam, nibh eu euismod pharetra, turpis mi varius
                  lectus, vel sodales risus orci in dolor. Duis feugiat quis magna
                  in faucibus. Maecenas gravida, risus in egestas faucibus, nibh
                  tortor hendrerit eros, vitae porttitor ipsum lacus non orci.
                  Cras tristique enim vel velit congue volutpat. Donec vel
                  pellentesque lacus. Maecenas tellus risus, pharetra imperdiet
                  congue viverra, faucibus in neque.</Text>
              ) } />

              <Route path="/components/switch-transition/1" render={ () => (
                <Text>Nunc non nulla sed purus placerat tincidunt. Donec imperdiet
                  nibh orci, sit amet malesuada lorem volutpat eget. Nam venenatis
                  ursus nisi, vel pellentesque leo lobortis ut. Etiam ultricies
                  congue sem at congue. Sed ex justo, scelerisque a mauris at,
                  efficitur blandit massa. Integer varius vulputate turpis. Class
                  aptent taciti sociosqu ad litora torquent per conubia nostra, per
                  inceptos himenaeos. Aenean augue mi, congue sit amet nibh nec,
                  accumsan dignissim elit. Sed interdum justo dui, nec fringilla
                  ante hendrerit quis. Vivamus vehicula elit euismod quam malesuada,
                  sit amet sodales metus pharetra. Curabitur laoreet blandit
                  hendrerit.</Text>
              ) } />
            </SwitchTransition>
          </TabContent>
        </ComponentExample>

        <ComponentPropsTable
            components={ [
              /* require('!!@brandwatch/axiom-documentation-loader!../../../src/SwitchTransition/SwitchTransition'), */
            ] }
            onEdit={ (...args) => this.setState((state) => onEdit(state, ...args)) }
            values={ this.state } />
      </DocumentationPage>
    );
  }
}
