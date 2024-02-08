import { Button, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Homepage = ({ navigation }) => {
    return (
        <View style={{
            padding: 16
        }}>
            <Icon name="home-outline" size={100} color={'deeppink'} />
            <Text
                style={{
                    marginBottom: 8,
                    fontWeight: "bold"
                }}
            >Welcome to the Homepage !</Text>
            <Button
                title="Go to About Page"
                color={'green'}
                onPress={() => navigation.navigate('About')}
            />
        </View>
    );
}

export default Homepage;