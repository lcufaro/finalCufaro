import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Auth from './../../screens/auth';
import Login from '../../screens/login';
import { Platform } from 'react-native';
import { COLORS } from '../../../constants/colors';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
            headerShown: false,
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? COLORS.primary : '',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}
    >

        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
);