import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './components/Provider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <StrictMode>
  <BrowserRouter>
  <CartProvider>
    <App />
  </CartProvider>
</BrowserRouter>
</StrictMode>
);


