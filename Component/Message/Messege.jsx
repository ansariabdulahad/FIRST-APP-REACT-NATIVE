import { Text, View } from "react-native";

const Message = ({ navigation }) => {
    return (
        <View style={{
            padding: 16
        }}>
            <Text
                style={{
                    marginBottom: 8,
                    fontWeight: "bold"
                }}
            >Welcome to the Message Page !</Text>
        </View>
    );
}

export default Message;