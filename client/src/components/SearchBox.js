import React from 'react'
import styled from 'styled-components';
import { Card } from './basecomponents/Card';

const InputBox = styled(Card)`
  height: 32px;
  width: 100%;
`;

const Input = styled.input`
  display: flex;
  width: 100%;
  border: none;
  &:focus {
    outline: none;
    }
`;

function SearchBox() {
  return (
    <InputBox>
      <Input></Input>
    </InputBox>
  )
};

export default SearchBox;