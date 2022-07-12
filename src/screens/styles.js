import { COLORS } from "../../constants/colors";
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontFamily: 'OpenSansBold',
        marginBottom: 18,
        textAlign: 'center',
    },
    container: {
        with: '80%',
        maxWidth: 400,
        padding: 12,
        margin: 12,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    prompt: {
        alignItems: 'center',
    },
    promptMessage: {
        fontSize: 16,
        fontFamily: 'OpenSans',
        color: '#333',
    },
    promptButton: {
        fontSize: 16,
        fontFamily: 'OpenSansBold',
        color: COLORS.primary
    },
    button: {
        backgroundColor: COLORS.primary,
        marginVertical: 20,
    },
    orderButton: {
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