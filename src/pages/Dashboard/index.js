/* eslint-disable quotes */
import React, {useState, useEffect} from 'react';

import getImage from '../../utils/getImage';
import formatValue from '../../utils/formatValue';

import api from '../../services/api';

import {
  Container,
  ProductContainer,
  ProductList,
  Product,
  ProductImage,
  ProductTitle,
  PriceContainer,
  ProductPrice,
  ProductButton,
} from './styles';

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      setProducts(response.data);
    }

    loadProducts();
  }, []);

  return (
    <Container>
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={(item) => item.id}
          scrollEnabled
          renderItem={({item}) => (
            <Product>
              <ProductImage source={getImage(item.image)} />
              <ProductTitle>{item.name}</ProductTitle>
              <PriceContainer>
                <ProductPrice>{formatValue(item.price)}</ProductPrice>
                <ProductButton />
              </PriceContainer>
            </Product>
          )}
        />
      </ProductContainer>
    </Container>
  );
};

export default Dashboard;
