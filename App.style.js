import { StyleSheet } from "react-native";

// External css properties
const Styles = StyleSheet.create({
    page: {
        backgroundColor: 'purple',
        flex: 1
    },
    bg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2
    },
    logoBox: {
        width: 120,
        height: 120,
        backgroundColor: 'white',
        borderRadius: 120 / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 24,
        color: '#fff',
        backgroundColor: 'black',
        fontWeight: 'bold',
        marginTop: 8,
        padding: 8,
        borderRadius: 8
    }
});

export default Styles;