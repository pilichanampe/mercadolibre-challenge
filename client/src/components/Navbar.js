import React from 'react';
import styled from 'styled-components';
import { Box } from './basecomponents/Box';
import { Image } from './basecomponents/Image';
import Logo from '../assets/icons/Logo_ML.png';
import SearchBox from './SearchBox';

const MeliLogo = styled(Image)`
  cursor: pointer;
`;

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
        {/* <Link to="/"> */}
          <MeliLogo
            onClick={() => window.location = '/'}
            width="44px"
            src={Logo}
            alt="Logo de Mercado Libre"
            mr={4}
          ></MeliLogo>
        {/* </Link> */}
        <SearchBox></SearchBox>
      </Box>
    </Nav>
  );
}

export default Navbar;
