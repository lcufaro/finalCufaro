import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Orders from '../../screens/Orders';
import { COLORS } from '../../../constants/colors';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName='Orders'
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
        <Stack.Screen name="Orders" component={Orders} options={{ title: 'Mis Ordenes' }} />

    </Stack.Navigator >
);
