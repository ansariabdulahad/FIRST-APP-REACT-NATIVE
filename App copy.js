import { Image, ImageBackground, StatusBar, StyleSheet, Text, View } from "react-native";
import Styles from "./App.style";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Internal css properties
// const styles = StyleSheet.create({
//   page: {
//     backgroundColor: 'green',
//     flex: 1
//   }
// })

const App = () => {

  const [show, setShow] = useState(false);

  return (
    <View style={Styles.page}>
      <StatusBar hidden={show} animated={true} backgroundColor={'black'} />
      <ImageBackground
        resizeMode="cover"
        source={{ uri: 'https://images.pexels.com/photos/719396/pexels-photo-719396.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} // offline image setting require('./assets/sonic.jpeg') and online image setting uri: http://location
        style={Styles.bg}
      >
        <View style={Styles.logoBox}>
          <Image
            source={require('./assets/sonic.jpeg')}
            style={Styles.logo}
          />
        </View>
        <Text
          style={Styles.text}
          onPress={() => setShow(!show)}
        >Control</Text>
      </ImageBackground>
    </View>
  );
}

export default App;