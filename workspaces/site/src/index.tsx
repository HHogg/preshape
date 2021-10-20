import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';
import './index.css';

const rootElement = document.getElementById('Root');

if (rootElement) {
  render(<Root />, rootElement);
}
