import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, View} from 'react-native';

import Routes from './routes';
import AppContainer from './hooks';

const App = () => {
  return (
    <View style={{backgroundColor: '#312e38', flex: 1}}>
      <AppContainer>
        <StatusBar barStyle="light-content" backgroundColor="#312e38" />
        <Routes />
      </AppContainer>
    </View>
  );
};

export default App;
