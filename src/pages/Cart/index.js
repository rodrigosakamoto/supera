import React, {useMemo} from 'react';
import {View, Text} from 'react-native';

import {useCart} from '../../hooks/cart';

import formatValue from '../../utils/formatValue';
import getImage from '../../utils/getImage';

import CartIcon from '../../assets/cart-icon.svg';

import {
  Container,
  ProductContainer,
  ProductList,
  Product,
  ProductImage,
  ProductTitleContainer,
  ProductTitle,
  ProductPriceContainer,
  ProductSinglePrice,
  TotalContainer,
  ProductPrice,
  ProductQuantity,
  ActionContainer,
  ActionButton,
  ActionButtonText,
  TotalProductsContainer,
  TotalProductsText,
  SubtotalValue,
  FreteValue,
  TotalValue,
} from './styles';

const Cart = () => {
  const {increment, decrement, products} = useCart();

  function handleIncrement(id) {
    increment(id);
  }

  function handleDecrement(id) {
    decrement(id);
  }

  const cartSubTotal = useMemo(() => {
    const total = products.reduce((accumulator, product) => {
      const productsSubTotal = product.price * product.quantity;

      return accumulator + productsSubTotal;
    }, 0);
    return total;
  }, [products]);

  const cartFrete = useMemo(() => {
    const frete = products.reduce((accumulator, product) => {
      if (cartSubTotal >= 250) {
        return 0;
      } else {
        const productFrete = product.quantity * 10;
        return accumulator + productFrete;
      }
    }, 0);

    return frete;
  }, [products, cartSubTotal]);

  const cartTotal = useMemo(() => {
    const total = products.reduce((accumulator, product) => {
      const productsTotal = product.price * product.quantity;

      return accumulator + productsTotal + cartFrete;
    }, 0);

    return formatValue(total);
  }, [cartFrete, products]);

  const totalItensInCart = useMemo(() => {
    const total = products.reduce((accumulator, product) => {
      const productsQuantity = product.quantity;

      return accumulator + productsQuantity;
    }, 0);

    return total;
  }, [products]);

  return (
    <Container>
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={(item) => item.id}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: 160,
          }}
          renderItem={({item}) => (
            <Product>
              <ProductImage source={getImage(item.image)} />
              <ProductTitleContainer>
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPriceContainer>
                  <ProductSinglePrice>
                    {formatValue(item.price)}
                  </ProductSinglePrice>

                  <TotalContainer>
                    <ProductQuantity>{`${item.quantity}x`}</ProductQuantity>

                    <ProductPrice>
                      {formatValue(item.price * item.quantity)}
                    </ProductPrice>
                  </TotalContainer>
                </ProductPriceContainer>
              </ProductTitleContainer>
              <ActionContainer>
                <ActionButton onPress={() => handleIncrement(item.id)}>
                  <ActionButtonText>+</ActionButtonText>
                </ActionButton>
                <ActionButton onPress={() => handleDecrement(item.id)}>
                  <ActionButtonText>-</ActionButtonText>
                </ActionButton>
              </ActionContainer>
            </Product>
          )}
        />
      </ProductContainer>
      <TotalProductsContainer>
        <CartIcon width="32" height="32" />
        <TotalProductsText>{`${totalItensInCart} itens`}</TotalProductsText>
        <SubtotalValue>Subtotal: {formatValue(cartSubTotal)}</SubtotalValue>
        <FreteValue>Frete: {formatValue(cartFrete)}</FreteValue>
        <TotalValue>Total: {cartTotal}</TotalValue>
      </TotalProductsContainer>
    </Container>
  );
};

export default Cart;
