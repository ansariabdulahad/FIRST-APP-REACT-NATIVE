import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "space-between"
    },
    header: {
        backgroundColor: "#c558fc",
        height: 150,
        justifyContent: "center",
        alignItems: "center"
    },
    circle: {
        width: 120,
        height: 120,
        borderRadius: 120 / 2,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: 90,
        height: 90,
        borderRadius: 90 / 2
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        margin: 12
    },
    input: {
        height: 48,
        borderWidth: 2,
        borderColor: "#ccc",
        margin: 12,
        padding: 10,
        borderRadius: 4
    },
    textArea: {
        height: 80
    },
    button: {
        width: 100,
        height: 48,
        backgroundColor: "#c558fc",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        margin: 12,
        borderRadius: 4
    },
    text: {
        color: "#fff",
        fontWeight: "bold"
    },
    footer: {
        padding: 16,
        alignItems: "center",
        backgroundColor: "#c558fc"
    }
});

export default Styles;