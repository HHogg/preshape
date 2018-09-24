import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { version } from '../../../package.json';
import componentsList from '../Components';
import guidesList from '../Guides';
import variables from '../Variables';
import Sidebar from '../Sidebar/Sidebar';
import SidebarMenu from '../Sidebar/SidebarMenu';
import SidebarMenuItem from '../Sidebar/SidebarMenuItem';

export default class DocumentationSidebar extends Component {
  static propTypes = {
    onClose: PropTypes.func,
  };

  render() {
    const { onClose } = this.props;

    return (
      <Sidebar { ...this.props }
          side="left"
          title="Documentation"
          width="15rem">
        <SidebarMenu title={ `v${version}` }>
          <SidebarMenuItem onClick={ onClose } to="/changelog">
            What's changed?
          </SidebarMenuItem>
        </SidebarMenu>

        <SidebarMenu title="Guides">
          { guidesList.map(({ name, to }) => (
            <SidebarMenuItem
                key={ to }
                onClick={ onClose }
                to={ to }>
              { name }
            </SidebarMenuItem>
          )) }
        </SidebarMenu>

        <SidebarMenu title="Variables">
          { variables.map(({ name, to }) => (
            <SidebarMenuItem
                key={ to }
                onClick={ onClose }
                to={ to }>
              { name }
            </SidebarMenuItem>
          )) }
        </SidebarMenu>

        <SidebarMenu title="Components">
          { componentsList.map(({ name, to }) => (
            <SidebarMenuItem
                key={ to }
                onClick={ onClose }
                to={ to }>
              { name }
            </SidebarMenuItem>
          )) }
        </SidebarMenu>
      </Sidebar>
    );
  }
}
