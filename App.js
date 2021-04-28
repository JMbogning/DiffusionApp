import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import Providers from './navigation';


const AppStack = createStackNavigator(); 

const App = () => {
  return (
    <Providers />
  );
}

export default App;

