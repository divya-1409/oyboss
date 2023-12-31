import React from 'react';
import styled from 'styled-components';
import {popularProducts} from '../HomeData';
import Product from './Product';
import {mobile} from '../Responsive'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    ${mobile({ flexDirection:"colomn" })}
`
const Products = () => {
  return (
    <Container>
      {popularProducts.map(item=>(
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
}

export default Products;
