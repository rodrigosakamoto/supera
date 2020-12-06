import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Text, View, StyleSheet} from 'react-native';

import CartIcon from '../assets/cart-icon-red.svg';

import Dashboard from '../pages/Dashboard';
import Cart from '../pages/Cart';

const App = createStackNavigator();

const AppRoutes = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: true,
        cardStyle: {backgroundColor: '#EBEEF8'},
      }}
      initialRouteName="Dashboard">
      <App.Screen
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: () => (
            <View style={styles.container}>
              <CartIcon width="32" />
              <Text style={styles.text}>SuperaCommerce</Text>
            </View>
          ),
        }}
        name="Dashboard"
        component={Dashboard}
      />
      <App.Screen
        options={{
          headerTransparent: true,
          headerTitle: () => (
            <View style={styles.container}>
              <CartIcon width="32" />
              <Text style={styles.text}>SuperaCommerce</Text>
            </View>
          ),
        }}
        name="Cart"
        component={Cart}
      />
    </App.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginLeft: 8,
  },
});

export default AppRoutes;
