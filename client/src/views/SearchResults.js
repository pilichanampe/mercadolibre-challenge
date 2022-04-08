import React, { useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { useProductsContext } from '../context/ProductsContext';
import ProductCard from '../components/basecomponents/ProductCard';
import { Box } from '../components/basecomponents/Box';
import styled from 'styled-components';
import { Container } from '../components/basecomponents/Container';
import BreadCrumbs from '../components/basecomponents/BreadCrumbs';
import Loading from '../components/basecomponents/Loading';
import ErrorPage from '../components/ErrorPage';

const ProductsWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${({theme}) => theme.colors.n0};
  border-radius: 4px;
`
const StyledLink = styled(Link)`
  width: 100%;
`;

function SearchResults() {
  const navigate = useNavigate();
  const { item, itemId, products, setProducts, getSearchResults, limit, categories, loading, setLoading } = useProductsContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const goToDetail = (productId) => {
    setLoading(true);
    navigate(`/items/${productId}`);
    window.history.go();

  }

  useEffect(() => {
    if (!products) {
      const getResults = async () => {
        setLoading(true);
        const params = {
          q: searchParams.get('search'),
          limit
        }
        await setProducts(getSearchResults(params));
      }
      getResults();
    }
  }, [products, categories, loading, item]);

  return (
    <Container
      as="main"
      pt="0px"
      pb="5"
    >
      {
        (loading) &&
        <Loading></Loading>
      }
      {
        ((products === undefined || products === null || products.length === 0) && !loading) &&
        <ErrorPage />
      }
      {
        (products && !loading) &&  
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="1184px"   
        >
          <BreadCrumbs />
          <ProductsWrapper>
            { products &&
              products.map((product) => {
                return (
                    <ProductCard
                      onClick={() => goToDetail(product.id)}
                      key={product.id}
                      item={product}                      
                    ></ProductCard>
                  )
              })              
            }
          </ProductsWrapper>
        </Box>
      } 
    </Container>
  )
}

export default SearchResults;