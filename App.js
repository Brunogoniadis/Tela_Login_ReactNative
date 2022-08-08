import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar , Text, View} from 'react-native';
import AuthProvider from './src/contexts/auth';
import Routes from './src/routes';

console.disableBox=true;


export default function App() {
 return (
  <NavigationContainer>
      <AuthProvider>
            <StatusBar backgroundColor="#ededed" barStyle="dark-content"/>
            <Routes/>
      </AuthProvider>
  </NavigationContainer>
  );
}