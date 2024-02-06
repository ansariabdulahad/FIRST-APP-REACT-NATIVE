import { Button, Text, View } from "react-native";

const About = ({ navigation }) => {
    return (
        <View style={{
            padding: 16
        }}>
            <Text
                style={{
                    marginBottom: 8,
                    fontWeight: "bold"
                }}
            >Welcome to the About Page !</Text>
            <Button
                title="Go To Homepage !"
                color={'red'}
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}

export default About;