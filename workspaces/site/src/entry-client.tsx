import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import React from 'react';

if (process.env.NODE_ENV === 'development') {
  ReactDOM.createRoot(document.getElementById('Root') as HTMLElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  ReactDOM.hydrateRoot(
    document.getElementById('Root')!,
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
