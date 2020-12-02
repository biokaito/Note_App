import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Drawer from './src/Screens/Drawer'
import LoginScreen from './src/Screens/LoginScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          headerMode='none'
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Note App" component={Drawer} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

