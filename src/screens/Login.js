import React, { useState } from 'react';
import { View, Text } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { TouchableOpacity } from "react-native-gesture-handler";
import { KeyboardAvoidingView } from "react-native";
import { signIn } from '../../app/api';
import { StyleSheet } from 'react-native';
import { styles } from './styles';

const Login = ({ navigation }) => {
    const title = 'LOGIN',
        message = '¿No tienes cuenta?',
        messageAction = 'Registrar',
        messageTarget = 'auth';

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <KeyboardAvoidingView
            behavior="height"
            style={styles.screen} >
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={style.input}
                    keyboardType="email-address"
                    autoCapitalize="none" onChangeText={(text) => setEmail(text)} />
                <Text style={styles.label}>Clave</Text>
                <TextInput
                    style={style.input}
                    secureTextEntry
                    autoCapitalize='none' onChangeText={(text) => setPassword(text)} />

                <TouchableOpacity style={style.btn} onPress={async () => {
                    await signIn(email, password);
                }}><Text style={style.white}>Login</Text></TouchableOpacity>

                <View style={styles.prompt}>
                    <Text style={styles.promptMessage}>{message}</Text>
                    <TouchableOpacity onPress={() => { console.log(messageTarget); navigation.navigate('Auth'); }}>
                        <Text style={styles.promptButtom}>{messageAction}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

export default Login;

const style = StyleSheet.create({
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