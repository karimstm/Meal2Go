import React from "react";

import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { SafeArea } from "../../components";
import { RestaurantsNavigator } from "./restaurant.navigator";
import { Ionicons } from "@expo/vector-icons";
import { MapScreen } from "../../Features/Map/screens/map.screen";
import { AccountNavigator } from "./account.navigator";

const TAB_ICON: { [key: string]: string } = {
  Restaurant: "md-restaurant",
  Settings: "md-settings",
  Map: "md-map",
};

const SettingsScreen = () => {
  return (
    <SafeArea>
      <Text>Settings!</Text>
    </SafeArea>
  );
};

const Tab = createBottomTabNavigator();

const tabBarIcon =
  (iconName: any) =>
  ({ color, size }: { color: string; size: number }) => {
    return <Ionicons name={iconName} size={size} color={color} />;
  };

const screenOptions = ({
  route,
}: {
  route: RouteProp<Record<string, object | undefined>, string>;
  navigation: any;
}) => {
  const iconName = TAB_ICON[route.name as string];
  return {
    tabBarIcon: tabBarIcon(iconName),
  };
};

const redTheme = {
  dark: false,
  colors: {
    primary: "rgb(255, 45, 85)",
    background: "rgb(242, 242, 242)",
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "rgb(199, 199, 204)",
    notification: "rgb(138, 21, 15)",
  },
};

export const AppNavigator = () => {
  return (
    <NavigationContainer theme={redTheme}>
      <AccountNavigator />
      {/* <Tab.Navigator
        screenOptions={screenOptions}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Restaurant" component={RestaurantsNavigator} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
};
