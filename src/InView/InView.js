import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import debounce from 'lodash.debounce';

const BUFFER = 20;

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();

  return rect.bottom > -BUFFER && rect.bottom < window.innerHeight + BUFFER &&
      rect.right > -BUFFER && rect.right < window.innerWidth + BUFFER &&
      rect.left > -BUFFER && rect.left < window.innerWidth + BUFFER &&
      rect.top > -BUFFER && rect.top < window.innerHeight + BUFFER;
}

export default class InView extends PureComponent {
  static propTypes = {
    children: PropTypes.func.isRequired,
    enabled: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    enabled: true,
  };

  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.updateIsInView = debounce(this.updateIsInView.bind(this), 100);
    this.state = {
      isInView: false,
    };
  }

  componentDidMount() {
    const { enabled } = this.props;

    if (enabled) {
      this.updateIsInView();
      this.addEventListeners();
    }
  }

  componentDidUpdate(prevProps) {
    const { enabled } = this.props;

    if (enabled !== prevProps.enabled) {
      if (enabled) {
        this.updateIsInView();
        this.addEventListeners();
      } else {
        this.removeEventListeners();
      }
    }
  }

  componentWillUnmount() {
    this.removeEventListeners();
  }

  addEventListeners() {
    document.addEventListener('scroll', this.updateIsInView);
    document.addEventListener('resize', this.updateIsInView);
  }

  removeEventListeners() {
    document.removeEventListener('scroll', this.updateIsInView);
    document.removeEventListener('resize', this.updateIsInView);
  }

  updateIsInView() {
    if (this.element) {
      const isInView = isElementInViewport(this.element);

      if (this.state.isInView !== isInView) {
        this.setState({ isInView });
      }
    }
  }

  setRef(element) {
    this.element = element;
  }

  render() {
    const { children } = this.props;
    const { isInView } = this.state;

    return children({
      isInView: isInView,
      ref: this.setRef,
    });
  }
}
