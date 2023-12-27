/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreenComponent from './components/screens/HomeScreenComponent';
import DetailScreenComponent from './components/screens/DetailScreenComponent';
import {store} from './app/store';
import {Provider} from 'react-redux';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Group>
            <Stack.Screen name="Home" component={HomeScreenComponent} />
          </Stack.Group>
          <Stack.Group screenOptions={{presentation: 'modal'}}>
            <Stack.Screen name="Detail" component={DetailScreenComponent} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
