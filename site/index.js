import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './components/Root';

const renderRoot = (Component) => {
  render(
    <AppContainer>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </AppContainer>,
  document.getElementById('Root'));
};

if (module.hot) {
  module.hot.accept('./components/Root', () => renderRoot(Root));
}

renderRoot(Root);
