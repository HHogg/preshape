import React, { Component } from 'react';
import Icon from '../Icon/Icon';
import Link from '../Link/Link';
import List from '../List/List';
import ListItem from '../List/ListItem';
import ThemeContext from '../Theme/ThemeContext';

export default class ApplicationThemeControls extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        { ({ onChangeTheme, theme }) => (
          <List { ...this.props }>
            <ListItem>
              <Link
                  active={ theme === 'day' }
                  onClick={ () => onChangeTheme('day') }>
                <Icon name="Sun" size="1rem" />
              </Link>
            </ListItem>

            <ListItem>
              <Link
                  active={ theme === 'night' }
                  onClick={ () => onChangeTheme('night') }>
                <Icon name="Moon" size="0.9rem" />
              </Link>
            </ListItem>
          </List>
        ) }
      </ThemeContext.Consumer>
    );
  }
}
