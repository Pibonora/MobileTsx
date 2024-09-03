// import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Routers from './src/routers/routers';
import AuthContext, { AuthProvider } from './src/context/auth';
// import StackNavigator from './src/component/StackerNavigator';


export default function App() {
  return (
   <NavigationContainer>
    <AuthProvider>
    <Routers/>
    </AuthProvider>
   </NavigationContainer>

  );
}


  

