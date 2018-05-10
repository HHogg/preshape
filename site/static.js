import React from 'react';
import { hydrate } from 'react-dom';
import { renderToString } from 'react-dom/server';
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import template from './index.ejs';
import Root from './components/Root';

if (typeof document !== 'undefined') {
  hydrate((
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  ), document.getElementById('Root'));
}

export default ({ path, webpackStats: { hash } }) => template({
  htmlWebpackPlugin: {
    options: {
      stylesheet: `/assets/preshape.${hash}.min.css`,
      script: `/assets/preshape.${hash}.min.js`,
      html: renderToString(
        <StaticRouter location={ path }>
          <Root />
        </StaticRouter>
      ),
    },
  },
});
