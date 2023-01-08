import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import Products from "../screens/Products";
import NewProduct from "../screens/NewProduct";

const Stack = createNativeStackNavigator();

export default function AuthNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="New Product"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Sign in" component={SignIn} />
        <Stack.Screen name="Sign up" component={SignUp} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="New Product" component={NewProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
