import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "./Component/Homepage";
import About from "./Component/About";
import Icon from "react-native-vector-icons/Ionicons";
import { Text } from "react-native";

const Conatiner = NavigationContainer;
const Stack = createNativeStackNavigator();
const Navigator = Stack.Navigator;
const Screen = Stack.Screen;

const App = () => {

  const options = {
    title: null,
    headerLeft: () => (
      <Icon name="home" size={30} />
    )
  }

  return (
    <Conatiner>
      <Navigator>
        <Screen
          name="Home"
          component={Homepage}
          options={options}
        />
        <Screen
          name="About"
          component={About}
          options={options}
        />
      </Navigator>
    </Conatiner>
  );
}

export default App;