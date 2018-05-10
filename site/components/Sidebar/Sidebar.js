import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Appear,
  Flex,
  Icon,
  Link,
  Text,
} from 'preshape';
import { zIndexSidebar } from '../Root';

export default class Sidebar extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    fullscreen: PropTypes.bool,
    onClose: PropTypes.func,
    side: PropTypes.oneOf(['left', 'right']).isRequired,
    title: PropTypes.string,
    width: PropTypes.string,
  };

  render() {
    const {
      children,
      fullscreen,
      onClose,
      side,
      title,
      width,
      ...rest
    } = this.props;

    const animation = ({
      left: 'FadeSlideRight',
      right: 'FadeSlideLeft',
    })[side];

    return (
      <Appear { ...rest }
          absolute={ fullscreen ? 'fullscreen' : null }
          animation={ animation }
          backgroundColor="shade-2"
          paddingVertical="x8"
          scrollable
          width={ fullscreen ? null : width }
          zIndex={ fullscreen ? zIndexSidebar : null }>

        { fullscreen && (
          <Flex
              alignChildrenVertical="middle"
              direction="horizontal"
              margin="x4"
              paddingHorizontal="x4">
            <Flex grow initial="none">
              <Text
                  strong
                  uppercase>{ title }</Text>
            </Flex>

            <Flex>
              <Link onClick={ onClose }>
                <Icon name="Cross" size="1.5rem" />
              </Link>
            </Flex>
          </Flex>
        ) }

        { children }
      </Appear>
    );
  }
}
