import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import OrderItem from '../../components/OrderItem'
import { Shop } from '../../context/Shop'
import { styles } from './styles';


export default function Orders({ navigation }) {
    const { orders, totalOrders } = useContext(Shop);

    const renderItemOrder = ({ item }) => (
        <OrderItem item={item} />
    );


    return (
        <View style={styles.container}>
            {orders.length === 0 ?
                <Text>No hay ordenes cargadas</Text> :
                <View>
                    <View style={styles.list}>
                        <FlatList
                            data={orders}
                            keyExtractor={item => item.id.toString()}
                            renderItem={renderItemOrder}
                        />
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.text}>Ordenes: $ {orders.length}</Text>
                        <Text style={styles.text}>Total Ordenes: $ {totalOrders()}</Text>
                    </View>
                </View>
            }
        </View>
    );
}
