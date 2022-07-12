import React from 'react';
import { View, Text } from "react-native";
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ShopNavigator from '../stacks/index';
import CartNavigator from '../stacks/cart';
import OrdersNavigator from '../stacks/orders';

const BottomTabs = createBottomTabNavigator();

export default () => (
    <BottomTabs.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar,
        }}
        initialRouteName='Shop' >
        <BottomTabs.Screen name="ShopTab" component={ShopNavigator} options={{
            tabBarIcon: ({ focused }) => (
                <View style={styles.item}>
                    <Ionicons name="md-home" size={24} color="black" />
                    <Text>Tienda</Text>
                </View>
            )
        }} />
        <BottomTabs.Screen name="CartTab" component={CartNavigator} options={{
            tabBarIcon: ({ focused }) => (
                <View style={styles.item}>
                    <Ionicons name="md-cart" size={24} color="black" />
                    <Text>Carrito</Text>
                </View>
            )
        }} />
        <BottomTabs.Screen name="OrdersTab" component={OrdersNavigator} options={{
            tabBarIcon: ({ focused }) => (
                <View style={styles.item}>
                    <Ionicons name="create" size={24} color="black" />
                    <Text>Ordenes</Text>
                </View>
            )
        }} />

    </BottomTabs.Navigator>
);

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: '#7f5df0',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 5,
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90,
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
