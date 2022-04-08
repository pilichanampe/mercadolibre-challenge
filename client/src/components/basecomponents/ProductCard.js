

import React from 'react'
import styled from 'styled-components';
import { Box } from './Box';
import { Card } from './Card';
import { Image } from './Image';
import { Title1, Span1, Span2 } from './Text';
import FreeShippingIcon from '../../assets/icons/ic_shipping.png';

const CardItem = styled(Card)`
  cursor: pointer;
  border-bottom: 1px solid ${({theme}) => theme.colors.n100};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding: ${({theme}) => theme.spaces.md};
  flex-direction: row;
  justify-content: start;
  align-items: start;
`;


function ProductCard({item, ...other}) {
  return (
    <>
      {
        item &&
        <CardItem {...other}>
          <Image
            width="180px"
            height="180px"
            borderRadius="4px"
            src={item.picture}
            alt={item.title}
            flex="1"
            mr="3"
          ></Image>
          <Box
            width="100%"
            height="100%"
            flex="2"
            pt="3"
          >
            <Span1
              mb="4"
            >
              $ {item.price.amount}
              {
                item.free_shipping ?
                <Image
                  ml="2"
                  src={FreeShippingIcon}
                  alt="Envío gratis"
                  title="Envío gratis"
                ></Image> :
                <></>
              }
            </Span1>
            <Title1>{item.title}</Title1>
          </Box>
          {/* Box 3 */}
          <Box
            flex="0.5"
            pt="3"
          >
            <Span2>{item.city}</Span2>
          </Box>
        </CardItem>
      }
    </>
  )
}

export default ProductCard