import { createContext, useContext, useState } from 'react';

const ProductsContext = createContext();

export function ProductsProvider({ children }) { 
  const [products, setProducts] = useState();
  const [categories, setCategories] = useState();
  const [allProducts, setAllProducts] = useState();
  const [searchQuery, setSearchQuery] = useState();
  
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
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export function useProductsContext() {
  return useContext(ProductsContext);
};