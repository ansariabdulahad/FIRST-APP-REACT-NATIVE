import { Text, View } from "react-native";

const Notifications = ({ navigation }) => {
    return (
        <View style={{
            padding: 16
        }}>
            <Text
                style={{
                    marginBottom: 8,
                    fontWeight: "bold"
                }}
            >Welcome to the Notifications Page !</Text>
        </View>
    );
}

export default Notifications;