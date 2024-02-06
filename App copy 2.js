import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "./Component/Homepage";
import About from "./Component/About";
import Icon from "react-native-vector-icons/Ionicons";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import Message from "./Component/Messege";
import Notifications from "./Component/Notifications";

const Conatiner = NavigationContainer;
const Stack = createNativeStackNavigator();
const Navigator = Stack.Navigator;
const Screen = Stack.Screen;

// TOOLBAR FOR NAVIGATION
const toolbar = [
  {
    navigate: 'Home',
    name: 'home-outline'
  },
  {
    navigate: 'Message',
    name: 'mail-outline'
  },
  {
    navigate: 'Notifications',
    name: 'notifications-outline'
  }
]

// HEADER LEFT NAVIGATION CONTROL CODING
const HeaderLeft = (navigation) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center'
      }}
    >
      {
        navigation.canGoBack()
          ? <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <Icon
              name="arrow-back"
              size={30}
              style={{
                marginRight: 16,
              }}
            />
          </TouchableOpacity>
          : null
      }
      <TouchableOpacity
        onPress={() => navigation.popToTop('Home')}
      >
        <Image
          source={require('./assets/favicon.png')}
          style={{
            width: 30,
            height: 30,
            margin: 8
          }}
        />
      </TouchableOpacity>
    </View>
  )
}

// HEADER RIGHT NAVIGATION CONTROL CODING
const HeaderRight = (navigation) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center'
      }}
    >
      {
        toolbar.map((item, index) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.navigate)}
            key={index}
            style={{
              marginHorizontal: 8
            }}
          >
            <Icon
              name={item.name}
              size={30}
            />
          </TouchableOpacity>
        ))
      }
    </View>
  );
}

const App = () => {

  const options = ({ navigation }) => ({
    // title: null,
    headerLeft: () => HeaderLeft(navigation),
    headerRight: () => HeaderRight(navigation),
    // headerTitleAlign: 'start',
    headerStyle: {
      backgroundColor: '#f5f5f5'
    },
    // headerShadowVisible: true,
    // headerShown: true
  })

  return (
    <Conatiner>
      <StatusBar />
      <Navigator>
        <Screen
          name="Home"
          component={Homepage}
          options={options} // -- one more way to send navigation in option -- options={({ navigation }) => options(navigation) }
        />
        <Screen
          name="About"
          component={About}
          options={options}
        />
        <Screen
          name="Message"
          component={Message}
          options={options}
        />
        <Screen
          name="Notifications"
          component={Notifications}
          options={options}
        />
      </Navigator>
    </Conatiner>
  );
}

export default App;