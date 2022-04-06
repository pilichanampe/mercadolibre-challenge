import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams, useParams, useNavigate, Navigate } from 'react-router-dom';
import { useProductsContext } from '../context/ProductsContext';
import { Card } from '../components/basecomponents/Card';
import { Button } from '../components/basecomponents/Button';

function SearchResults() {
  // const searchQuery, setSearchQuery] = useSearchParams();
  const navigate = useNavigate();
  const { getItem, itemId, products, getSearchResults, limit } = useProductsContext();
  const { q } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [results, setResults] = useState();

  


  // const getItem = () => {
  //   // setItemId(id);
  //   // navigate(`/items/${itemId}`);
  //   axios.get(`/api/items/${itemId}`).then((response) => {
  //     console.log(response.data);
  //   })    
  // }

  useEffect(() => {
    if (!products) {
      const getResults = async () => {
        console.log('searchParams en SearchREsults', searchParams.get('search'));
        const params = {
          q: searchParams.get('search'),
          limit
        }
        setResults(await getSearchResults(params));
      }
      getResults();
      console.log('products en SearchResults', products);
      console.log('results en SearchResults', results);
    }
  }, [searchParams]);
  
  const goToProductDetail = () => {
    navigate(`/items/${itemId}`)
  }

  return (
    <div>
      {products &&
        <Button
          onClick={() => goToProductDetail()}
        >
          {products.items[0].title}
        </Button>      
      }
    </div>
  )
}

export default SearchResults