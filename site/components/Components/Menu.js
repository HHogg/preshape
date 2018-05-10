import React, { Component } from 'react';
import { Menu, MenuItem } from 'preshape';
import onEdit from '../Component/onEdit';
import DocumentationPage from '../Documentation/DocumentationPage';
import ComponentExample from '../Component/ComponentExample';
import ComponentPropsTable from '../Component/ComponentPropsTable';
import RenderRepeat from '../RenderRepeat/RenderRepeat';

export default class ComponentMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0,
      MenuItem: {
        active: false,
      },
    };
  }

  handleClick(activeItem) {
    this.setState({
      ...onEdit(this.state, 'MenuItem', 'active', false),
      activeItem,
    });
  }

  handleEdit(component, prop, value) {
    if (prop === 'active') {
      this.setState({
        ...onEdit(this.state, component, prop, value),
        activeItem: null,
      });
    } else {
      this.setState(onEdit(this.state, component, prop, value));
    }
  }

  render() {
    return (
      <DocumentationPage { ...this.props }>
        <ComponentExample>
          <Menu { ...this.state.Menu }>
            <RenderRepeat count={ 5 }>
              { (n) => (
                <MenuItem { ...this.state.MenuItem }
                    active={ this.state.activeItem === n || this.state.MenuItem.active }
                    key={ n }
                    onClick={ () => this.handleClick(n) }>
                  Lorem ipsum
                </MenuItem>
              ) }
            </RenderRepeat>
          </Menu>
        </ComponentExample>

        <ComponentPropsTable
            components={ [
              require('!!@brandwatch/axiom-documentation-loader!../../../src/Menu/Menu'),
              require('!!@brandwatch/axiom-documentation-loader!../../../src/Menu/MenuItem'),
            ] }
            onEdit={ (...args) => this.handleEdit(...args) }
            values={ this.state } />
      </DocumentationPage>
    );
  }
}
