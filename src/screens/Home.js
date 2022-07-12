import React from 'react';
import { View, Text, Button } from "react-native";

const Home = ({ navigation, route }) => {
    return (
        <View>
            <Text>Categorias</Text>
            <Button title="IR A PRODUCTOS" onPress={() => navigation.navigate('Contact')}></Button>
        </View>
    )
}

export default Home;