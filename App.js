import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//Screens
import Login from './screens/Login';
import Signup from './screens/Singup';
import Welcome from './screens/Welcome';

//
import RootStack from './navigators/RootStack';


export default function App() {
  return <RootStack/>; 
  
}


