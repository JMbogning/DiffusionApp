import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';

const Routes = () => {
    return (
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    );
}

export default Routes;
