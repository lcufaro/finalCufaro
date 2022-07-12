import React, { useState } from 'react';
import { View, Text, Button } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { signUp } from '../../app/api';

import { useNavigation } from '@react-navigation/native';


const Register = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <>
            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none" onChangeText={(text) => setEmail(text)} />
            <Text style={styles.label}>Clave</Text>
            <TextInput
                style={styles.input}
                secureTextEntry
                autoCapitalize='none' onChangeText={(text) => setPassword(text)} />
            <TouchableOpacity style={styles.btn} onPress={async () => {
                await signUp(email, password);
                navigation.navigate('Login');
            }}><Text style={styles.white}>Registrar</Text></TouchableOpacity>

        </>
    )
}

export default Register

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        margin: 10,
        borderRadius: 5
    },
    btn: {
        backgroundColor: 'darkblue',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    white: {
        color: 'white',
    }
})