import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Homescreen'
import SignIn from '../screens/SignIn'
import Forgot from '../screens/forgot'
import SignUp from './signup'
import Otp from './otpscreen'
import Reset from './resetPass'
const Router = ()=>{
  const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen" headerMode="none">
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Forgot" component={Forgot} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Otp" component={Otp} />
          <Stack.Screen name="Reset" component={Reset} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
export default Router;