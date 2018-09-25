import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import popperJS from 'popper.js';
import omit from 'lodash.omit';
import Appear from '../Appear/Appear';
import Base from '../Base/Base';
import Flex from '../Flex/Flex';
import ToolbarTargetReference from './ToolbarTargetReference';
import './Toolbar.css';

export default class Toolbar extends Component {
  static propTypes = {
    /** Toolbar action components. */
    children: PropTypes.node.isRequired,
    /**
     * An HTML element to insert the toolbar into. Defaults
     * to the document.body.
     */
    container: PropTypes.object,
    /**
     * Target is a function that is provided with a ref. Used for
     * situations where the Toolbar is to be positioned around a
     * DOM node.
     */
    target: PropTypes.func,
    /**
     * An object that specifies `width`, `height`, `x` and `y` values.
     * Used for situations where the Toolbar is to be pragmatically
     * positioned, for example on an HTML canvas.
     */
    targetBox: PropTypes.shape({
      height: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    }),
    /**
     * Visibility toggle for the Toolbar.
     */
    visible: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      render: props.visible,
      visible: false,
    };
  }

  componentDidMount() {
    if (this.state.render) {
      this.createPopper();
    }
  }

  componentDidUpdate(prevProps) {
    const {
      visible,
      targetBox,
    } = this.props;

    if (visible !== prevProps.visible) {
      if (visible) {
        this.setState({ render: true }, () => {
          this.createPopper();
        });
      } else {
        this.setState({ visible: false });
      }
    } else if (this.popper && visible) {
      if (this.targetReference) {
        this.targetReference.update(targetBox);
      }

      this.popper.update();
    }
  }

  componentWillUnmount() {
    this.destroyPopper();
  }

  createPopper() {
    this.popper = new popperJS(this.target(), this.elContent, {
      onCreate: () => this.setState({ visible: true }),
      placement: 'top',
      modifiers: {
        arrow: {
          element: this.elArrow,
        },
        flip: {
          behavior: ['top'],
        },
        inner: {
          enabled: false,
        },
        offset: {
          enabled: false,
        },
      },
    });
  }

  destroyPopper() {
    if (this.propper) {
      this.popper.destroy();
    }
  }

  target() {
    const {
      target,
      targetBox,
    } = this.props;

    if (target) {
      return this.elTarget;
    }

    this.targetReference = new ToolbarTargetReference();
    this.targetReference.update(targetBox);
    return this.targetReference;
  }

  handleExited() {
    this.destroyPopper();
    this.setState({ render: false });
  }

  render() {
    const { children, container = document.body, target, ...rest } = this.props;
    const { render, visible } = this.state;
    const props = omit(rest, [
      'targetBox',
      'visible',
    ]);

    return (
      <Fragment>
        { target && target((el) => this.elTarget = ReactDOM.findDOMNode(el)) }

        { render && ReactDOM.createPortal(
          <div
              className="Toolbar__popper"
              ref={ (el) => this.elContent = ReactDOM.findDOMNode(el) }>
            <Appear { ...props }
                animation="Pop"
                className="Toolbar"
                onExited={ () => this.handleExited() }
                visible={ visible }>
              <div
                  className="Toolbar__tip"
                  ref={ (el) => this.elArrow = ReactDOM.findDOMNode(el) } />
              <Base
                  Component={ Flex }
                  backgroundColor="text-shade-2"
                  className="Toolbar__content"
                  direction="horizontal"
                  gutter="x1"
                  padding="x1">
                { children }
              </Base>
            </Appear>
          </div>,
          container,
        ) }
      </Fragment>
    );
  }
}
