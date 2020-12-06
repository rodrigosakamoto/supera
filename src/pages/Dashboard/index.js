/* eslint-disable quotes */
import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import getImage from '../../utils/getImage';
import formatValue from '../../utils/formatValue';

import {useCart} from '../../hooks/cart';

import api from '../../services/api';

import FloatingCart from '../../components/FloatingCart';

import {
  Container,
  FilterContainer,
  FilterButton,
  FilterText,
  ProductContainer,
  ProductList,
  Product,
  ProductImage,
  ProductTitle,
  ProductScore,
  PriceContainer,
  ProductPrice,
  ProductButton,
  ProductButtonText,
} from './styles';

const Dashboard = () => {
  const {addToCart} = useCart();
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products', {
        params: {
          _sort: filter,
        },
      });

      setProducts(response.data);
    }

    loadProducts();
  }, [filter]);

  function handleAddToCart(item) {
    addToCart(item);
  }

  return (
    <Container>
      <FilterContainer>
        <FilterButton onPress={() => setFilter('price')}>
          <FilterText>Price</FilterText>
        </FilterButton>
        <FilterButton onPress={() => setFilter('score')}>
          <FilterText>Score</FilterText>
        </FilterButton>
        <FilterButton onPress={() => setFilter('name')}>
          <FilterText>A - Z</FilterText>
        </FilterButton>
      </FilterContainer>
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={(item) => item.id}
          scrollEnabled
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: 80,
          }}
          renderItem={({item}) => (
            <Product>
              <ProductImage source={getImage(item.image)} />
              <ProductTitle>{item.name}</ProductTitle>
              <ProductScore>Score: {item.score}</ProductScore>
              <PriceContainer>
                <ProductPrice>{formatValue(item.price)}</ProductPrice>
                <ProductButton onPress={() => handleAddToCart(item)}>
                  <ProductButtonText>+</ProductButtonText>
                </ProductButton>
              </PriceContainer>
            </Product>
          )}
        />
      </ProductContainer>
      <FloatingCart />
    </Container>
  );
};

export default Dashboard;
