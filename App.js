import { NavigationContainer as Container } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Homepage from './Component/Homepage/Homepage';
import { StatusBar } from "react-native";

const { Navigator, Screen } = createNativeStackNavigator();

const App = () => {

  const homeOption = {
    headerShown: false
  }

  return (
    <Container>
      <Navigator>
        <Screen
          name="Home"
          component={Homepage}
          options={homeOption}
        />
      </Navigator>
    </Container>
  );
}

export default App;