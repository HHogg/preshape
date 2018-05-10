import PropTypes from 'prop-types';
import { Component } from 'react';

const isClient = typeof window !== 'undefined' && window.matchMedia;

export default class Responsive extends Component {
  static propTypes = {
    /** Function that is given a matching function to dynamically return depending on the viewport size. */
    children: PropTypes.func.isRequired,
    /**
     * Handler that is called when a query listener is called, E.g. when the
     * matched query has changed.
     */
    onChange: PropTypes.func,
    /**
     * An array of widths to be used for adding media query listeners. This
     * must be provided from smallest to largest.
     */
    queries: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  constructor(props) {
    const initialIndex = props.queries.length - 1;

    super(props);
    this.state = {
      hit: props.queries[initialIndex],
      hitIndex: initialIndex,
    };

    this.match = this.match.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
  }

  componentDidMount() {
    if (isClient) {
      this.addListerners(this.props.queries);
      this.update();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (isClient) {
      this.removeListeners();
      this.addListerners(nextProps.queries);
      this.update();
    }
  }

  componentWillUnmount() {
    if (isClient) {
      this.removeListeners();
    }
  }

  addListerners(queries) {
    this.listeners = queries.map((query) => {
      const listener = window.matchMedia(`(min-width: ${query})`);
      listener.addListener(this.handleQueryChange);
      listener.query = query;
      return listener;
    });
  }

  removeListeners() {
    this.listeners.forEach((listener) => {
      listener.removeListener(this.handleQueryChange);
    });
  }

  handleQueryChange(event) {
    const { queries, onChange } = this.props;
    const hit = event.query || event.target.query;
    const hitIndex = queries.indexOf(hit);
    this.setState({ hit, hitIndex });

    if (onChange) {
      onChange(hit, event.matches);
    }
  }

  getMatchingQuery() {
    for (let i = this.listeners.length; i--;) {
      if (this.listeners[i].matches) {
        return this.listeners[i].query;
      }
    }

    return null;
  }

  update() {
    const hit = this.getMatchingQuery();
    const hitIndex = this.props.queries.indexOf(hit);
    this.setState({ hit, hitIndex });
  }

  match(pattern) {
    const { queries } = this.props;
    let { hit, hitIndex } = this.state;

    if (this.listeners) {
      hit = this.getMatchingQuery();
      hitIndex = queries.indexOf(hit);
    }

    if (pattern === null) {
      return hit === null;
    }

    if (typeof pattern === 'string') {
      const patternIndex = queries.indexOf(pattern);
      return patternIndex >= 0 && patternIndex <= hitIndex;
    }

    for (let i = hitIndex + 1; i--;) {
      if (queries[i] in pattern) {
        return pattern[queries[i]];
      }
    }

    return false;
  }

  render() {
    return this.props.children(this.match, {
      query: this.state.hit,
    });
  }
}
