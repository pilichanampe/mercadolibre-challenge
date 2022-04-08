import React, { useEffect } from 'react'
import styled from "styled-components";
import { flexbox, color, space, layout, background, border, position, shadow } from "styled-system";
import { useProductsContext } from '../../context/ProductsContext';

const Breadcrumbs = styled.ul`
  list-style: none;
  padding: 16px 4px;
  & > li:after {
    content: "${props => props.separator || ">"}";
    padding: 0 16px;
  };
  ${flexbox};
  ${color};
  ${space};
  ${layout};
  ${background};
  ${border};
  ${position};
  ${shadow};  
`;

export const Crumb = styled.li`
  display: inline-block;

  &:last-of-type:after {
    content: "";
    padding: 0;
  }

  a {
    color: ${props => props.theme.colors.n200};
    text-decoration: none;
    &:hover,
    &:active {
      /* text-decoration: underline; */
    }
  }
`;


function BreadCrumbs() {
  const { categories } = useProductsContext();

  useEffect(() => {
  
  }, [categories]);
  
  return (
    <Breadcrumbs alignSelf="start">
      {
        categories &&
        categories?.map(category => { 
          return (
            <Crumb key={category}>
              <a href="#">{ category }</a>
            </Crumb>
          )
        })

      }
  </Breadcrumbs>
  )
}

export default BreadCrumbs;