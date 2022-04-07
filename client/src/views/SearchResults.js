import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams, useParams, useNavigate, Navigate, Link } from 'react-router-dom';
import { useProductsContext } from '../context/ProductsContext';
import { Card } from '../components/basecomponents/Card';
import { Button } from '../components/basecomponents/Button';
import ProductCard from '../components/basecomponents/ProductCard';
import { Box } from '../components/basecomponents/Box';
import styled from 'styled-components';
import { Container } from '../components/basecomponents/Container';
import BreadCrumbs from '../components/basecomponents/BreadCrumbs';
import { Span1, Span2 } from '../components/basecomponents/Text';
import Loading from '../components/basecomponents/Loading';

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
  // const searchQuery, setSearchQuery] = useSearchParams();
  const navigate = useNavigate();
  const { getItem, itemId, products, getSearchResults, limit, categories, loading, setLoading } = useProductsContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const [results, setResults] = useState();

  useEffect(() => {
    if (!products) {
      const getResults = async () => {
        setLoading(true);
        const params = {
          q: searchParams.get('search'),
          limit
        }
        await setResults(getSearchResults(params));
      }
      getResults();
    }
  }, [products, categories, loading]);

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
      {/* {
        (!products && !loading) &&
        <Span1 mt="4">!Ups! No encontramos el producto que estás buscando. Por favor, probá con una nueva búsqueda :).</Span1>
      } */}
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
                  <StyledLink
                  to={`/items/${product.id}`}
                  key={product.id}
                  >
                    <ProductCard
                      item={product}                      
                    ></ProductCard>
                    </StyledLink>
                  )
              })              
            }
          </ProductsWrapper>
        </Box>
      } 
    </Container>
  )
}

export default SearchResults