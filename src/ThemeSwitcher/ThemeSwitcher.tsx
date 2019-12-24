import * as React from 'react';
import { TypeTheme } from '../Base/Base';
import Icon from '../Icon/Icon';
import Link from '../Link/Link';
import List, { Props as ListProps } from '../List/List';
import ListItem from '../List/ListItem';

interface Props extends ListProps {
  onChange?: (theme: TypeTheme) => void;
  theme: TypeTheme;
}

const ThemeControls: React.FunctionComponent<Props> = (props: Props) => {
  const { onChange, theme, ...rest } = props;

  return (
    <List { ...rest }>
      <ListItem>
        <Link
            active={ theme === 'day' }
            onClick={ onChange && (() => onChange('day')) }>
          <Icon name="Sun" size="1rem" />
        </Link>
      </ListItem>

      <ListItem>
        <Link
            active={ theme === 'night' }
            onClick={ onChange && (() => onChange('night')) }>
          <Icon name="Moon" size="0.9rem" />
        </Link>
      </ListItem>
    </List>
  );
};

export default ThemeControls;
