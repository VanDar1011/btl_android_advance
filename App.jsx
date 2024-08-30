import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/components/HomeScreen';
import Cart from './src/components/CartScreen';
import Medicines from './src/components/MedicinesScreen';
import Login from './src/components/LoginScreen';
import Register from './src/components/RegisterScreen';
import Appointment from './src/components/AppointmentScreen';
import Articles from './src/components/ArticlesScreen';
import AppointmentDetails from './src/components/AppointmentDetailsScreen';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Medicines" component={Medicines} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Appointment" component={Appointment} />
        <Stack.Screen name="Articles" component={Articles} />
        <Stack.Screen
          name="AppointmentDetails"
          component={AppointmentDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
