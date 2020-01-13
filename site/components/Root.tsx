import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Site from './Site';

export const widthContainer = '1152px';
export const widthLarge = '1024px';
export const widthMedium = '832px';
export const widthSmall = '480px';

export default () => {
  return (
    <BrowserRouter>
      <Site />
    </BrowserRouter>
  );
};
