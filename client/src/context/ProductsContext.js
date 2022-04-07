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
  const [item, setItem] = useState();
  const [loading, setLoading] = useState();
  const [price, setPrice] = useState();
  
  const getItem = async (id) => {
    setItemId(id);
    setLoading(true);
    axios.get(`/api/items/${id}`).then((response) => {  
      setLoading(false);    
      setItem(response.data);
      setPrice(response.data.price.amount);
    }).catch((error) => {
      setLoading(false);    
      return error;
    }).finally(() => {
      setLoading(false);
    }) 
  };



  const getSearchResults = async (params) => {
    try {
      const apiResponse = await axios.get('api/items', { params });
      await setProducts(apiResponse.data.items);
      await setCategories(apiResponse.data.categories);

    } catch(error) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {

  }, [products, categories])
  

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
        item,
        setItem,
        loading,
        setLoading,
        price,
        setPrice,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export function useProductsContext() {
  return useContext(ProductsContext);
};