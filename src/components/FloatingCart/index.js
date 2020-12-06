import React, {useMemo} from 'react';

import {useNavigation} from '@react-navigation/native';

import CartIcon from '../../assets/cart-icon.svg';

import {
  Container,
  CartPricing,
  CartButton,
  CartButtonText,
  CartTotalPrice,
} from './styles';

import formatValue from '../../utils/formatValue';

import {useCart} from '../../hooks/cart';

const FloatingCart = () => {
  const {products} = useCart();

  const navigation = useNavigation();

  const cartTotal = useMemo(() => {
    const total = products.reduce((accumulator, product) => {
      const productsSubTotal = product.price * product.quantity;

      return accumulator + productsSubTotal;
    }, 0);
    return formatValue(total);
  }, [products]);

  const totalItensInCart = useMemo(() => {
    const total = products.reduce((accumulator, product) => {
      const productsQuantity = product.quantity;

      return accumulator + productsQuantity;
    }, 0);

    return total;
  }, [products]);

  return (
    <Container>
      <CartButton onPress={() => navigation.navigate('Cart')}>
        <CartIcon width="32" height="32" />
        <CartButtonText>{`${totalItensInCart} itens`}</CartButtonText>
      </CartButton>

      <CartPricing>
        <CartTotalPrice>{cartTotal}</CartTotalPrice>
      </CartPricing>
    </Container>
  );
};

export default FloatingCart;
