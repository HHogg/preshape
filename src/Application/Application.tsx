import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import omit from 'lodash.omit';
import Flex, { Props as FlexProps } from '../Flex/Flex';
import ThemeContext from '../Theme/ThemeContext';

const { useEffect } = React;

type TypeApplicationTheme = 'day' | 'night';

export interface Props extends FlexProps {
  onChangeTheme: (theme: TypeApplicationTheme) => void;
  theme: TypeApplicationTheme;
}

const Application: React.FunctionComponent<Props & RouteComponentProps> = (props: Props & RouteComponentProps) => {
  const { location, onChangeTheme, theme, ...rest } = props;
  const restProps = omit(rest, [
    'history', // from ReactRouter
    'match', // from ReactRouter
    'staticContext', // from ReactRouter
  ]);

  const handleChangeTheme = (theme: TypeApplicationTheme) => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('Theme--day');
      document.documentElement.classList.remove('Theme--night');
      document.documentElement.classList.add(`Theme--${theme}`);
    }

    if (onChangeTheme) {
      onChangeTheme(theme);
    }
  };

  const themeProviderValue = {
    onChangeTheme: handleChangeTheme,
    theme: theme,
  };

  useEffect(() => {
    const element = location.hash && document.querySelector(location.hash);

    if (location.hash && element) {
      element.scrollIntoView();
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location]);

  useEffect(() => {
    handleChangeTheme(theme);
  }, [theme]);


  return (
    <ThemeContext.Provider value={ themeProviderValue }>
      <Flex { ...restProps } direction="vertical" grow />
    </ThemeContext.Provider>
  );
};

Application.defaultProps = {
  theme: 'day',
};

export default withRouter(Application);

