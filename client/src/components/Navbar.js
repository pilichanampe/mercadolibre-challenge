import React from 'react';
import styled from 'styled-components';
import { Box } from './basecomponents/Box';
import { Spacer } from './basecomponents/Spacer';
import { Image } from './basecomponents/Image';
import Logo from '../assets/icons/Logo_ML.png';
import SearchBox from './SearchBox';
import { Container } from './basecomponents/Container';

const Nav = styled(Box)`
  display: flex;
  justify-content: center;
  height: 48px;
  width: 100%;
  align-items: center;
  background: ${({ theme }) => theme.colors.brandDefault};
  position: relative;
  z-index: 2;
  padding: 24px;
  top: 0;
  left: 0; 
  right: 0; 
`;

function Navbar() {
  return (
    <Nav as="nav">
      <Box
        display="flex" 
        alignItems="center"
        width="1184px"
      >
        <Image
          width="44px"
          src={Logo}
          alt="MercadoLibre logo"
          mr={4}
        ></Image>
        <SearchBox></SearchBox>
      </Box>
    </Nav>
  );
}

export default Navbar;
