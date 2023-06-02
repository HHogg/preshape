import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

if (process.env.NODE_ENV === 'development') {
  createRoot(document.getElementById('Root') as HTMLElement).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
} else {
  hydrateRoot(
    document.getElementById('Root')!,
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
