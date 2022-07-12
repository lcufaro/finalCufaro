import React from 'react';
import { View, Text, Button } from "react-native";

const Contact = ({ navigation, route }) => {
    return (
        <View>
            <Text>screen {route.name}</Text>
            <Button title="Change Screen" onPress={() =>
                navigation.navigate('Contact')
            }></Button>
        </View>
    )
}

export default Contact;