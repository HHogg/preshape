import * as React from 'react';
import Base, { Attributes, BaseProps } from '../Base/Base';

export interface ListItemProps extends BaseProps {
  /**
   * Separating string.
   *
   * @default "/"
   */
  separator?: string;
}

const ListItem: React.RefForwardingComponent<HTMLLIElement, Attributes<HTMLLIElement, ListItemProps>> = (props, ref) => {
  const { children, separator = '/', ...rest } = props;

  return (
    <Base { ...rest }
        alignChildrenVertical="middle"
        className="ListItem"
        data-separator={ separator }
        flex="horizontal"
        ref={ ref }
        tag="li">
      <Base>{ children }</Base>
    </Base>
  );
};

export default React.forwardRef(ListItem);
