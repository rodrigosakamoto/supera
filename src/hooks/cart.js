import React, {
  createContext,
  useCallback,
  useState,
  useEffect,
  useContext,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

const CartContext = createContext();

const CartProvider = ({children}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await AsyncStorage.getItem('@SuperaCommerce:products');

      if (response) {
        setProducts([...JSON.parse(response)]);
      }
    }
    loadProducts();
  }, []);

  const addToCart = useCallback(
    async (product) => {
      const productExists = products.find((p) => p.id === product.id);

      if (productExists) {
        setProducts(
          products.map((p) =>
            p.id === product.id ? {...product, quantity: p.quantity + 1} : p,
          ),
        );
      } else {
        setProducts([...products, {...product, quantity: 1}]);
      }
      await AsyncStorage.setItem(
        '@SuperaCommerce:products',
        JSON.stringify(products),
      );
    },
    [products],
  );

  const increment = useCallback(
    async (id) => {
      const newProducts = products.map((p) =>
        p.id === id ? {...p, quantity: p.quantity + 1} : p,
      );

      setProducts(newProducts);

      await AsyncStorage.setItem(
        '@SuperaCommerce:products',
        JSON.stringify(newProducts),
      );
    },
    [products],
  );

  const decrement = useCallback(
    async (id) => {
      const removeProducts = products.map((p) =>
        p.id === id ? {...p, quantity: p.quantity - 1} : p,
      );

      const filterProducts = removeProducts.filter((p) => p.quantity !== 0);

      setProducts(filterProducts);

      await AsyncStorage.setItem(
        '@SuperaCommerce:products',
        JSON.stringify(filterProducts),
      );
    },
    [products],
  );

  const value = React.useMemo(
    () => ({addToCart, increment, decrement, products}),
    [products, addToCart, increment, decrement],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart() {
  const context = useContext(CartContext);

  return context;
}

export {CartProvider, useCart};
