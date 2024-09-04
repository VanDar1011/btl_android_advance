import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/components/HomeScreen';
import HomeVip from './src/components/HomeScreenVip';
import Cart from './src/components/CartScreen';
import Medicines from './src/components/MedicinesScreen';
import Login from './src/components/LoginScreen';
import Register from './src/components/RegisterScreen';
import Appointment from './src/components/AppointmentScreen';
import Articles from './src/components/ArticlesScreen';
import AppointmentDetails from './src/components/AppointmentDetailsScreen';
import MedicineBenefitScreen from './src/components/MedicineBenefitScreen';
import TermsPrivacyScreen from './src/components/TermsPrivacyScreen';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Medicines">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Vip"
          component={HomeVip}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Medicines"
          component={Medicines}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Appointment"
          component={Appointment}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Articles"
          component={Articles}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AppointmentDetails"
          component={AppointmentDetails}
        />
        <Stack.Screen
          name="BenefitScreen"
          component={MedicineBenefitScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TermsPrivacyScreen"
          component={TermsPrivacyScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
