import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './MDMARTS/App';
import ProductStore from './MDMARTS/ProductStore';
import { Provider } from 'react-redux';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={ProductStore}>
      <App/>
    </Provider>
  </React.StrictMode>
);
