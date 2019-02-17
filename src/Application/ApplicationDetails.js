import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Link from '../Link/Link';
import List from '../List/List';
import ListItem from '../List/ListItem';
import Text from '../Text/Text';

export default class ApplicationDetails extends Component {
  static propTypes = {
    github: PropTypes.string,
    license: PropTypes.string,
    licenseUrl: PropTypes.string,
  };

  render() {
    const {
      github,
      ...rest
    } = this.props;

    return (
      <List { ...rest } gutter="x2">
        { github && (
          <ListItem separator="|">
            <Text size="small">
              Check out this project on <Link href={ github }>Github</Link>
            </Text>
          </ListItem>
        ) }
      </List>
    );
  }
}
