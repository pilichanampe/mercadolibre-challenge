import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { Button } from './components/basecomponents/Button';
import Navbar from './components/Navbar';

function App() {
  const [backendData, setBackendData] = useState([])
  useEffect(() => {
    axios.get('/api')
      .then(res => {
        setBackendData(res.data.users)
      })
  }, [])

  return (
    <div>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Navbar></Navbar>
            <Link to="/product-detail">Product detail</Link> |{" "}
            <Link to="/search-results">Search results</Link>
            <Button>Holis</Button>
          </ThemeProvider>
    </div>
  )
}

export default App