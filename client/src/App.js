import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_SERVICE from './services/api.service';
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { Button } from './components/basecomponents/Button';
import Navbar from './components/Navbar';
import { useProductsContext } from './context/ProductsContext';

function App() {
  // const { products } = useProductsContext();
  const inputClient = 'ipod con cable';

  useEffect(() => {
    // API_SERVICE.init();
//     axios.get(`/sites/MLA/search?q=${inputClient}`)
//       .then(res => {
//         // setBackendData(res);
//         // console.log(backendData)
// ;      })
  }, [])

  return (
    <div>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Navbar></Navbar>
          </ThemeProvider>
    </div>
  )
}

export default App