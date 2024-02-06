import { Image, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import Styles from "./Homepage.style";

const Homepage = ({ navigation }) => {
    return (
        <View style={Styles.main}>
            <ScrollView>
                <StatusBar />
                <View style={Styles.header}>
                    <View style={Styles.circle}>
                        <Image
                            source={require('../../assets/sonic.jpeg')}
                            style={Styles.logo}
                        />
                    </View>
                </View>
                <View style={{ padding: 8 }}>
                    <Text style={Styles.title}>Register Now</Text>
                    <TextInput
                        placeholder="Your Name"
                        placeholderTextColor={'grey'}
                        style={Styles.input}
                    />
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor={'grey'}
                        keyboardType="email-address"
                        style={Styles.input}
                    />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor={'grey'}
                        secureTextEntry={true}
                        style={Styles.input}
                    />
                    <TextInput
                        placeholder="Mobile"
                        placeholderTextColor={'grey'}
                        keyboardType="phone-pad"
                        style={Styles.input}
                    />
                    <TextInput
                        placeholder="Address"
                        placeholderTextColor={'grey'}
                        multiline={true}
                        style={{ ...Styles.input, ...Styles.textArea }}
                    />
                    <TouchableOpacity style={Styles.button}>
                        <Text style={Styles.text}>SUBMIT</Text>
                    </TouchableOpacity>
                </View>
                <View style={Styles.footer}>
                    <Text style={Styles.text}>Developed By JFC !</Text>
                </View>
            </ScrollView>
        </View>
    );
}

export default Homepage;