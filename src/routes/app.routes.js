import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {Text} from 'react-native';

import Dashboard from '../pages/Dashboard';

const App = createStackNavigator();

const AppRoutes = () => {
  return (
    <NavigationContainer>
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
            headerTitle: () => <Text>SuperaCommerce</Text>,
          }}
          name="Dashboard"
          component={Dashboard}
        />
      </App.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
