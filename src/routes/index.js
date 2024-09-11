import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Home from '../components/HomeScreen';
import HomeVip from '../components/HomeScreenVip';
import Cart from '../components/CartScreen';
import Medicines from '../components/MedicinesScreen';
import Login from '../components/LoginScreen';
import Register from '../components/RegisterScreen';
import Appointment from '../components/AppointmentScreen';
import Articles from '../components/ArticlesScreen';
import AppointmentDetails from '../components/AppointmentDetailsScreen';
import MedicineBenefitScreen from '../components/MedicineBenefitScreen';
import TermsPrivacyScreen from '../components/TermsPrivacyScreen';
const Routes = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Vip">
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
export default Routes;
