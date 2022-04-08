import React, { useEffect } from 'react'
import styled from 'styled-components';
import { Card } from './basecomponents/Card';
import { Image } from './basecomponents/Image';
import SearchLogo from '../assets/icons/ic_Search.png';
import { Box } from './basecomponents/Box';
import { useProductsContext } from '../context/ProductsContext';
import axios from 'axios';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';

const InputBox = styled(Card)`
  height: 32px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
`;

const Input = styled.input`
  display: flex;
  width: 100%;
  height: inherit;
  padding-left: 12px;
  padding-right: 12px;
  border: none;
  border-radius: inherit;
  &:focus {
    outline: none;
    }
`;

const SearchButton = styled.button`
  display: flex;
  justify-content: center ;
  align-items: center ;
  height: 32px;
  border: none;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  cursor: pointer;
  &:focus {
    outline: none;
    }
`;

function SearchBox() {
  const navigate = useNavigate();
  const { searchQuery, setSearchQuery, limit } = useProductsContext();
  const { getSearchResults, setLoading } = useProductsContext();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const params = {
      q: searchQuery,
      limit,
    }
    try {
      navigate('/');
      await getSearchResults(params);
      navigate(`/items?search=${searchQuery}`);
    } catch {
      navigate(`/*`);
    }
  }

  return (
    <>
      <InputBox
        as="form"
        onSubmit={handleSubmit}        
      >
        <Input
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Nunca dejes de buscar"
        ></Input>
        <SearchButton
          as="button"
          height="100%"
        >
        <Image
          src={SearchLogo}
          ></Image>
        </SearchButton>
      </InputBox>
    </>
  )
};

export default SearchBox;