import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import './styles/index.css';
import ScrollToTop from "./components/ScrollToTop";
import App from './App';
import store from './redux/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop/>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
