import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import CartItem from '../../components/CartItem'
import { Shop } from '../../context/Shop'
import { styles } from './styles';

export default function Cart({ navigation }) {
    const { cart, removeToCart, generateOrder, totalOrder } = useContext(Shop);

    const handleDelete = (item) => {
        removeToCart(item.id);
        console.log('Borrado de Cart!');
    }

    const renderItemCart = ({ item }) => (
        <CartItem item={item} onDelete={handleDelete} />
    );


    return (
        <View style={styles.container}>
            {cart.length === 0 ?
                <Text>El carrito está vacio</Text> :
                <View>
                    <View style={styles.list}>
                        <FlatList
                            data={cart}
                            keyExtractor={item => item.id.toString()}
                            renderItem={renderItemCart}
                        />
                    </View>
                    <View style={styles.footer}>
                        <TouchableOpacity style={styles.orderButton} onPress={() => generateOrder()}><Text>Finalizar compra</Text></TouchableOpacity>
                        <Text style={styles.text}>Total: $ {totalOrder()}</Text>
                    </View>
                </View>
            }
        </View>
    );
}
