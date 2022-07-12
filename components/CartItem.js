import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'


const CartItem = ({ item, onDelete }) => {
    console.log('CartItem', item);
    return (
        <TouchableOpacity onPress={() => onDelete(item)}>
            <View style={styles.breadItem}>
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
                <View>
                    <Text style={styles.details}>$ {item.price}</Text>
                    <Text style={styles.details}>{item.weight}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    breadItem: {
        padding: 20,
        margin: 10,
        borderRadius: 3,
        backgroundColor: '#ccc'
    },
    title: {
        fontSize: 20,
        fontFamily: 'OpenSansBold'
    },
    details: {
        fontSize: 16,
    },
});

export default CartItem;