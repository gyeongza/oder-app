import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import globalStyles from './styles/globalStyles';
import { Global } from '@emotion/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
);
