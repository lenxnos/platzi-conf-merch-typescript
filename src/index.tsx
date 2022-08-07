import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './routes/App';

const container = document.getElementById('root');
if (container === null) {
  throw new Error('No container found');
}
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
