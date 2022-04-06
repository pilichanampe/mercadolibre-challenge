import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const ProductsContext = createContext();

export function ProductsProvider({ children }) { 
  const [products, setProducts] = useState();
  const [categories, setCategories] = useState();
  const [allProducts, setAllProducts] = useState();
  const [searchQuery, setSearchQuery] = useState();
  const [searchParams, setSearchParams] = useState();
  const [itemId, setItemId] = useState('MLA1130139998');
  const [limit, setLimit] = useState(4);
  
  const getItem = async () => {
    // setItemId(id);
    axios.get(`/api/items/${itemId}`).then((response) => {
      console.log(response.data);
    })    
  };

  // const getSearchResults = (params) => {
  //   axios.get('/api/items', { params }).then((response) => {
  //     console.log(response.data);
  //     setProducts(response.data);
  //     console.log(products);
  //   })
  // }
  const getSearchResults = async (params) => {
    const apiResponse = await axios.get('api/items', { params });
    await setProducts(apiResponse.data);
    console.log('products en context', products);
    return products;
  }

  useEffect(() => {

  }, [products])
  

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        categories,
        setCategories,
        allProducts,
        setAllProducts,
        searchQuery,
        setSearchQuery,
        searchParams,
        setSearchParams,
        getItem,
        getSearchResults,
        limit,
        setLimit,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export function useProductsContext() {
  return useContext(ProductsContext);
};