import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import omit from 'lodash.omit';
import Flex from '../Flex/Flex';
import ThemeContext from '../Theme/ThemeContext';

class Application extends Component {
  static propTypes = {
    location: PropTypes.shape({
      hash: PropTypes.string,
    }).isRequired,
    onChangeTheme: PropTypes.func,
    theme: PropTypes.oneOf(['day', 'night']),
  };

  static defaultProps = {
    theme: 'day',
  };

  componentDidUpdate(prevProps) {
    const { location, theme } = this.props;

    if (location !== prevProps.location) {
      if (location.hash && document.querySelector(location.hash)) {
        document.querySelector(location.hash).scrollIntoView();
      } else {
        window.scrollTo({ top: 0 });
      }
    }

    if (theme !== prevProps.theme) {
      this.handleChangeTheme(theme);
    }
  }

  handleChangeTheme(theme) {
    const { onChangeTheme } = this.props;

    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('Theme--day');
      document.documentElement.classList.remove('Theme--night');
      document.documentElement.classList.add(`Theme--${theme}`);
    }

    if (onChangeTheme) {
      onChangeTheme(theme);
    }
  }

  render() {
    const { theme, ...rest } = this.props;

    const props = omit(rest, [
      'history', // from ReactRouter
      'location', // from ReactRouter
      'match', // from ReactRouter
      'onChangeTheme',
      'staticContext', // from ReactRouter
    ]);

    const themeProviderValue = {
      onChangeTheme: (theme) => this.handleChangeTheme(theme),
      theme: theme,
    };

    return (
      <ThemeContext.Provider value={ themeProviderValue }>
        <Flex { ...props } direction="vertical" grow />
      </ThemeContext.Provider>
    );
  }
}

export default withRouter(Application);
