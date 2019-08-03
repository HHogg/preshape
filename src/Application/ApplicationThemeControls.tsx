import * as React from 'react';
import Icon from '../Icon/Icon';
import Link from '../Link/Link';
import List, { Props as ListProps } from '../List/List';
import ListItem from '../List/ListItem';
import ThemeContext from '../Theme/ThemeContext';

interface Props extends ListProps {}

const ApplicationThemeControls: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <ThemeContext.Consumer>
      { ({ onChangeTheme, theme }) => (
        <List { ...props }>
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
};

export default ApplicationThemeControls;
