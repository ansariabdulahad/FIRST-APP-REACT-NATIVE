import { Image, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import Styles from "./Homepage.style";
import { useState } from "react";

const Homepage = ({ navigation }) => {

    const [formData, setFormData] = useState({
        name: 'Abdul',
        email: 'abdul@gmail.com',
        password: '1234',
        mobile: 9545282488,
        address: 'Mumbai'
    });

    // HANDLE INPUT FUNCTION TO UPDATE FORMDATA USEING USEFORMDATA STATE
    const handleInput = (nativeEvent, prop) => {
        const value = nativeEvent.text;

        setFormData((oldData) => {
            return {
                ...oldData,
                [prop]: value
            }
        })
    }

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
                        name='name'
                        placeholder="Your Name"
                        placeholderTextColor={'grey'}
                        value={formData.name}
                        onChange={({ nativeEvent }) => handleInput(nativeEvent, 'name')}
                        style={Styles.input}
                    />
                    <TextInput
                        name="email"
                        placeholder="Email"
                        placeholderTextColor={'grey'}
                        value={formData.email}
                        keyboardType="email-address"
                        onChange={({ nativeEvent }) => handleInput(nativeEvent, 'email')}
                        style={Styles.input}
                    />
                    <TextInput
                        name="password"
                        placeholder="Password"
                        placeholderTextColor={'grey'}
                        value={formData.password}
                        secureTextEntry={true}
                        onChange={({ nativeEvent }) => handleInput(nativeEvent, 'password')}
                        style={Styles.input}
                    />
                    <TextInput
                        name="mobile"
                        placeholder="Mobile"
                        placeholderTextColor={'grey'}
                        value={formData.mobile}
                        keyboardType="phone-pad"
                        onChange={({ nativeEvent }) => handleInput(nativeEvent, 'mobile')}
                        style={Styles.input}
                    />
                    <TextInput
                        name="address"
                        placeholder="Address"
                        placeholderTextColor={'grey'}
                        value={formData.address}
                        multiline={true}
                        onChange={({ nativeEvent }) => handleInput(nativeEvent, 'address')}
                        style={{ ...Styles.input, ...Styles.textArea }}
                    />
                    <TouchableOpacity
                        style={Styles.button}
                        onPress={() => console.log(formData)}
                    >
                        <Text style={Styles.text}>SUBMIT</Text>
                    </TouchableOpacity>
                </View>
                <View style={Styles.footer}>
                    <Text style={Styles.text}>Developed By JFC !</Text>
                </View>
            </ScrollView >
        </View >
    );
}

export default Homepage;