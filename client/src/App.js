import React from 'react';
import { Container } from './components/basecomponents/Container';
import Loading from './components/basecomponents/Loading';
import { Span1 } from './components/basecomponents/Text';
import { useProductsContext } from './context/ProductsContext';

function App() {
  const { loading } = useProductsContext();

  return (
    <Container>
      {
        loading &&
        <Loading></Loading>
      }
      {
        !loading &&
        <Span1>¡Te damos la bienvenida a Mercado Libre Argentina! Buscá ese producto que querés :).</Span1>
      }
    </Container>
  )
}

export default App