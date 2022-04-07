import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "styled-components";
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import Navbar from './components/Navbar';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProductDetail from './views/ProductDetail';
import SearchResults from './views/SearchResults';
import { ProductsProvider } from './context/ProductsContext';

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
              <Route exact path="/" element={<App />} />
              <Route exact path="/items/:id" element={<ProductDetail />} />
              <Route exact path="/items" element={<SearchResults />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
