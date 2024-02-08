import { Image, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import Styles from "./Homepage.style";
import { useState } from "react";

const Homepage = ({ navigation }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');

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
                        onChangeText={setName}
                        placeholderTextColor={'grey'}
                        style={Styles.input}
                    />
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor={'grey'}
                        keyboardType="email-address"
                        onChangeText={setEmail}
                        style={Styles.input}
                    />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor={'grey'}
                        secureTextEntry={true}
                        onChangeText={setPassword}
                        style={Styles.input}
                    />
                    <TextInput
                        placeholder="Mobile"
                        placeholderTextColor={'grey'}
                        keyboardType="phone-pad"
                        onChangeText={setMobile}
                        style={Styles.input}
                    />
                    <TextInput
                        placeholder="Address"
                        placeholderTextColor={'grey'}
                        multiline={true}
                        onChangeText={setAddress}
                        style={{ ...Styles.input, ...Styles.textArea }}
                    />
                    <TouchableOpacity
                        style={Styles.button}
                        onPress={() => console.log({
                            name,
                            email,
                            password,
                            mobile,
                            address
                        })}
                    >
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