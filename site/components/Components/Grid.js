import React, { Component } from 'react';
import { Flex, Grid, GridItem } from 'preshape';
import onEdit from '../Component/onEdit';
import DocumentationPage from '../Documentation/DocumentationPage';
import ComponentExample from '../Component/ComponentExample';
import ComponentPropsTable from '../Component/ComponentPropsTable';
import RenderRepeat from '../RenderRepeat/RenderRepeat';
import ThemeIcon from '../ThemeIcon/ThemeIcon';

export default class ComponentGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Grid: {
        alignChildren: 'middle',
        columnCount: '3',
        gap: 'x1',
      },
    };
  }

  render() {
    return (
      <DocumentationPage { ...this.props }>
        <ComponentExample>
          <Grid { ...this.state.Grid }>
            <RenderRepeat count={ 9 }>
              { (n) => (
                <GridItem { ...this.state.GridItem } key={ n }>
                  <Flex
                      alignChildren="middle"
                      backgroundColor="shade-3"
                      color
                      direction="vertical"
                      height="6rem"
                      width="6rem">
                    <ThemeIcon size="1.5rem" />
                  </Flex>
                </GridItem>
              ) }
            </RenderRepeat>
          </Grid>
        </ComponentExample>

        <ComponentPropsTable
            components={ [
              require('!!@brandwatch/axiom-documentation-loader!../../../src/Grid/Grid'),
              require('!!@brandwatch/axiom-documentation-loader!../../../src/Grid/GridItem'),
            ] }
            onEdit={ (...args) => this.setState((state) => onEdit(state, ...args)) }
            values={ this.state } />
      </DocumentationPage>
    );
  }
}
