import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Route from './src/routes/Routes'

export default function App() {
  return (
    <NavigationContainer>
      <Route />
    </NavigationContainer>
  );
}

