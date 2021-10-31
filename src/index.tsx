import React from 'react';
import ReactDOM from 'react-dom';
import './global/styles/index.css';
import { BrowserRouter } from 'react-router-dom'
import StickyHeaderProvider from './context/sticky-header/stickyHeader';
import App from './App';

ReactDOM.render(
  <StickyHeaderProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </StickyHeaderProvider>,
  document.getElementById('root')
);
