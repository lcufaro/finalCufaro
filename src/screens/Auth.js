import { TouchableOpacity } from "react-native-gesture-handler";
import { KeyboardAvoidingView } from "react-native";
import { styles } from './styles';
import { View, Text, Button } from "react-native";
import Register from "./Register";


const Auth = ({ navigation }) => {
    const title = 'REGISTRO',
        message = '¿Ya tienes cuenta?',
        messageAction = 'Ingresar',
        messageTarget = 'login';

    return (
        <KeyboardAvoidingView
            behavior="height"
            style={styles.screen} >
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Register />
                <View style={styles.prompt}>
                    <Text style={styles.promptMessage}>{message}</Text>
                    <TouchableOpacity onPress={() => { console.log(messageTarget); navigation.navigate('Login'); }}>
                        <Text style={styles.promptButtom}>{messageAction}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

export default Auth;