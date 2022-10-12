import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

import React from 'react';

import News from './screens/News';
import ShowNews from './screens/ShowNews';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Notícias" component={News} />
          <Stack.Screen name="Notícia" component={ShowNews} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}