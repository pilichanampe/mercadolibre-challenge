import React, { useEffect } from 'react'
import { useParams, useSearchParams, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import { Box } from '../components/basecomponents/Box';
import BreadCrumbs from '../components/basecomponents/BreadCrumbs'
import { Card } from '../components/basecomponents/Card';
import { Container } from '../components/basecomponents/Container';
import { Image } from '../components/basecomponents/Image';
import { Button } from '../components/basecomponents/Button';
import { useProductsContext } from '../context/ProductsContext';
import { Span1, Span2, Text } from '../components/basecomponents/Text';
import Loading from '../components/basecomponents/Loading';
import ErrorPage from '../components/ErrorPage';

const BackToList = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  cursor: pointer;
  padding-left: 4px;
`;

const Product = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const BuyBox = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-left: 1px solid ${({theme}) => theme.colors.n100};
`;

const Description = styled(Box)`
  border-top: 1px solid ${({theme}) => theme.colors.n100};
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: ${({theme}) => theme.spaces.md};
`;

function ProductDetail() {
  const { item, getItem, categories, setItem, loading, setLoading, price } = useProductsContext();
  const params = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
 
  useEffect(() => {
    if (!item) {
      setLoading(true);
      const getProductDetail = async () => {
        const { id } = params;
        try {
          await setItem(() => getItem(id));
        } catch {
          navigate('/');
        }
      }
      getProductDetail();
    }
  }, [item, categories, loading, params, searchParams]);

  return (
    <>
      {
        ((typeof item !== 'object') && !loading) &&
        <ErrorPage></ErrorPage>
      }
      <Container
        as="main"
        pt="0"
      >
        {
          loading &&
          <Loading></Loading>
        }
        {
          (typeof item === 'object' && !loading) &&
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            width="1184px"
          >
            <Box
              alignSelf="start"
              display="flex"
              width="100%"
            >
              <BackToList onClick={() => navigate(-1)}>Volver al listado</BackToList>
              <BreadCrumbs />
            </Box>
            <Card>
              <Product>
                <Box
                  display="flex"
                  flexDirection="column"
                  flex="1"
                  p="4"
                  minHeight="600p"
                >
                  <Box
                    height="600px"
                    width="700px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Image
                      alt="Imagen del producto"
                      src={item.picture}
                      display="flex"
                      borderRadius="4px"
                      flex="2"
                      width="100%"
                      height="inherit"
                    ></Image>                  
                  </Box>
                  <Description>
                    <Span1
                      fontWeight="500"
                      fontSize="lg2"
                      mb="4"
                    >
                      Descripci??n del producto
                    </Span1>
                    <Text>{item.description}</Text>
                  </Description>
                </Box>
                <BuyBox
                  p="4"
                  flex="1"
                >
                  <Span2
                    fontSize="sm2"
                    mb="3"
                  >{item.condition === 'new' ? 'Nuevo' : 'Usado'} - {item.sold_quantity} vendidos</Span2>
                  <Span1>{item.title}</Span1>
                  <Span1
                    fontSize="lg1"
                    my="4"
                  >$ { price }</Span1>
                  <form>
                    <Button width="100%">Comprar</Button>
                  </form>
                </BuyBox>
              </Product>
            </Card>
          </Box>
        }
      </Container>
    </>
  )
}

export default ProductDetail