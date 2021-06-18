import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AccountScreen } from "../../Features/Account/screens/account.screen";
import { LoginScreen } from "../../Features/Account/screens/login.screen";
import { RegisterScreen } from "../../Features/Account/screens/register.screen";

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Main" component={AccountScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Regiser" component={RegisterScreen} />
  </Stack.Navigator>
);
