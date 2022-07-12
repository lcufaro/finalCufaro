import React, { useContext } from 'react';
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS } from "../../constants/colors";
import { Shop } from '../../context/Shop';

const BreadDetail = ({ navigation, route }) => {
    const { addToCart } = useContext(Shop);

    const bread = route.params.bread;
    console.log(bread);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{bread.name}</Text>
            </View>
            <View>
                <Text>{bread.description}</Text>
            </View>
            <View>
                <Text>$ {bread.price}</Text>
            </View>
            <View>
                <Text>{bread.weight}</Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.boton} onPress={() => navigation.goBack()}><Text>Volver</Text></TouchableOpacity>
                <TouchableOpacity style={styles.boton} onPress={() => addToCart(bread)}><Text>Agregar al carrito</Text></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontFamily: 'OpenSansBold',
        marginBottom: 10,
    },
    buttons: {
        marginTop: 10,
    },
    boton: {
        flex: 1,
        borderRadius: 6,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowRadius: 6,
        elevation: 3,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        marginTop: 10,
        backgroundColor: COLORS.primary,
        marginVertical: 20,
    }
});

export default BreadDetail;