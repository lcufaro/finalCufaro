import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Cart from '../../screens/Cart';
import { COLORS } from '../../../constants/colors';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName='Cart'
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS !== 'android' ? COLORS.primary : '',
            },
            headerTintColor: Platform.OS !== 'android' ? 'white' : COLORS.primary,
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}
    >
        <Stack.Screen name="Cart" component={Cart} options={{ title: 'Carrito' }} />

    </Stack.Navigator >
);
