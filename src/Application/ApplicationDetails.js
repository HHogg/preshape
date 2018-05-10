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
      license,
      licenseUrl,
      ...rest
    } = this.props;

    return (
      <List { ...rest } gutter="x2">
        <ListItem separator="|">
          <Text size="small">
            Made with <Link href="https://preshape.hogg.io">Preshape</Link>
          </Text>
        </ListItem>

        { github && (
          <ListItem separator="|">
            <Text size="small">
              Check out this project on <Link href={ github }>Github</Link>
            </Text>
          </ListItem>
        ) }

        { license && (
          <ListItem>
            <Link href={ licenseUrl }>
              <Text size="small">License { license }</Text>
            </Link>
          </ListItem>
        ) }
      </List>
    );
  }
}
