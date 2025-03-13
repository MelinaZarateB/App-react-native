import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import Product from "./screens/Product";
import ProductDetail from "./screens/ProductDetail";
import SignUp from './screens/SignUp';
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Detail" component={ProductDetail} />
      </Stack.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <MyStack></MyStack>
    </NavigationContainer>
  );
}
