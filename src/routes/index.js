import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import HomeVip from '../screen/HomeScreen';
import CartScreen from '../screen/CartScreen';
import LoginScreen from '../screen/auth/LoginScreen';
import RegisterScreen from '../screen/auth/RegisterScreen';
import AppointmentScreen from '../screen/AppointmentScreen';
import ArticlesScreen from '../screen/ArticlesScreen';
import AppointmentDetailsScreen from '../screen/AppointmentDetailsScreen';
import MedicineBenefitScreen from '../components/MedicineBenefitScreen';
import TermsPrivacyScreen from '../components/TermsPrivacyScreen';
import DetailsMedicineScreen from '../screen/DetailsMedicineScreen';
import MedicinesScreen from '../screen/MedicinesScreen';
import ArcilesDetailsScreen from '../screen/ArctilesDetailsScreen';
import ProfileScreen from '../screen/Profile';
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeVip}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Medicines"
          component={MedicinesScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailsMedicine"
          component={DetailsMedicineScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Appointment"
          component={AppointmentScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AppointmentDetails"
          component={AppointmentDetailsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Articles"
          component={ArticlesScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ArctilesDetails"
          component={ArcilesDetailsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{headerShown: false}}
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
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
