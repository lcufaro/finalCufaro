import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const OrderItem = ({ item }) => {
    console.log('OrderItem', item);
    return (
        <View style={styles.orderItem}>
            <View>
                <Text style={styles.title}>Cliente: {item.buyer}</Text>
            </View>
            <View>
                <Text style={styles.details}>Fecha: {item.date}</Text>
                <Text style={styles.details}>Cant. Productos: {item.items.length}</Text>
                <Text style={styles.details}>$ {item.total}</Text>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    orderItem: {
        padding: 20,
        margin: 10,
        borderRadius: 3,
        backgroundColor: '#ccc'
    },
    title: {
        fontSize: 16,
        fontFamily: 'OpenSansBold'
    },
    details: {
        fontSize: 14,
    },
});

export default OrderItem;