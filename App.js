import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ScreenList from "./screens/ScreenList";
import ScreenInput from "./screens/ScreenInput";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ScreenInput}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="List"
          component={ScreenList}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}