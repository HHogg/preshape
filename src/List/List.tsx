import * as React from 'react';
import classnames from 'classnames';
import { TypeBaseSize } from '../Base/Base';
import Flex, { Props as FlexProps } from '../Flex/Flex';
import './List.css';

export interface Props extends FlexProps {
  gap?: TypeBaseSize;
}

const List: React.FunctionComponent<Props> = (props: Props) => {
  const { gap, ...rest } = props;
  const classes = classnames('List', `List--${gap}`);

  return (
    <Flex { ...rest }
        Component="ul"
        alignChildrenVertical="middle"
        className={ classes }
        direction="horizontal"
        gap={ gap }
        wrap />
  );
};

List.defaultProps = {
  gap: 'x1',
};

export default List;
