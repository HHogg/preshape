import * as React from 'react';
import { Attributes, TypeTheme } from '../Base/Base';
import Icon from '../Icon/Icon';
import Link from '../Link/Link';
import List, { ListProps } from '../List/List';
import ListItem from '../List/ListItem';

export interface ThemeSwitcherProps extends ListProps {
  iconSize?: string;
  onChange?: (theme: TypeTheme) => void;
  theme: TypeTheme;
}

const ThemeControls: React.RefForwardingComponent<HTMLUListElement, Attributes<HTMLUListElement, ThemeSwitcherProps>> = (props, ref) => {
  const { iconSize = '1rem', onChange, theme, ...rest } = props;

  return (
    <List { ...rest } ref={ ref }>
      <ListItem>
        <Link
            active={ theme === 'day' }
            onClick={ onChange && (() => onChange('day')) }>
          <Icon name="Sun" size={ iconSize } />
        </Link>
      </ListItem>

      <ListItem>
        <Link
            active={ theme === 'night' }
            onClick={ onChange && (() => onChange('night')) }>
          <Icon name="Moon" size={ iconSize } />
        </Link>
      </ListItem>
    </List>
  );
};

export default React.forwardRef(ThemeControls);
