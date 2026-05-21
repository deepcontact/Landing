import React from 'react';
import ReactDOM from 'react-dom/client';
import { SpeedInsights } from '@vercel/speed-insights/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

const path = window.location.pathname;
if (path === '/login' || path.startsWith('/backoffice')) {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
      <SpeedInsights />
    </React.StrictMode>
  );
}
