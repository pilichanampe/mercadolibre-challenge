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
import ErrorPage from './components/ErrorPage';

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
              <Route path="/" element={<App />} />
              <Route exacts path="/items/:id" element={<ProductDetail />} />
              <Route path="/items" element={<SearchResults />} />
              <Route path="*" element={<ErrorPage />} />
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
