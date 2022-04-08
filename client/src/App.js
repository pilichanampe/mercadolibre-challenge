import React from 'react';
import { Container } from './components/basecomponents/Container';
import { Image } from './components/basecomponents/Image';
import Loading from './components/basecomponents/Loading';
import { Span1 } from './components/basecomponents/Text';
import { useProductsContext } from './context/ProductsContext';
import Meli from './assets/meli.png';

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
        <Container
          flexDirection="column"
        >
          <Span1>¡Te damos la bienvenida a Mercado Libre Argentina! Buscá ese producto que querés :).</Span1>
          <Image
            alt="Imagen de Mercado Libre"
            mt="100px" 
            src={Meli}
          />

        </Container>
      }
    </Container>
  )
}

export default App