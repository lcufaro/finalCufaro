import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Categories from '../../screens/categories';
import CategoryBreads from '../../screens/CategoryBreads';
import BreadDetail from '../../screens/BreadDetail';
import { Platform } from 'react-native';
import { COLORS } from '../../../constants/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { logout } from '../../../app/api'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();


const handleSignOut = () => {
    console.log('Salir');
};

export default () => (
    <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS !== 'android' ? COLORS.primary : '',
            },
            headerTintColor: Platform.OS !== 'android' ? 'white' : COLORS.primary,
            headerTitleStyle: {
                fontWeight: 'bold'
            },
            headerRight:
                () => {
                    return (
                        <TouchableOpacity onPress={() => logout()}>
                            <Ionicons style={{ marginRight: 5 }} name="log-out" size={24} color="black" />
                        </TouchableOpacity>
                    )
                }
        }}
    >

        <Stack.Screen name="Home" component={Categories} options={{ title: 'Mi Pan' }} />
        <Stack.Screen name="Products" component={CategoryBreads}
            options={({ route }) => ({
                title: route.params.name,
            })}
        />
        <Stack.Screen name="Detail" component={BreadDetail}
            options={({ route }) => ({
                title: route.params.name,
            })}
        />
    </Stack.Navigator>
);