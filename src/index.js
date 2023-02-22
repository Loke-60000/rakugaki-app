import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './css/index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './pages/serviceWorker.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
serviceWorker.register();
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  
);

reportWebVitals();
