// App.js

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import LoadingScreen from "./LoadingScreen";
import HomeScreen from "./HomeScreen";
import InformationScreen from "./InformationScreen";
import InformationScreen_Drugs from "./InformationScreen_Drugs";
import InformationScreen_Effects from "./InformationScreen_Effects";
import InformationScreen_Signs from "./InformationScreen_Signs";
import Prevention from "./Prevention";
import Resources from "./Resources";
import Support from "./Support";
import Settings from "./Settings";
import Emergency from "./Emergency";



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingScreen" headerMode="none">
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="InformationScreen" component={InformationScreen} />
        <Stack.Screen
          name="InformationScreen_Drugs"
          component={InformationScreen_Drugs}
        />
        <Stack.Screen
          name="InformationScreen_Effects"
          component={InformationScreen_Effects}
        />
        <Stack.Screen
          name="InformationScreen_Signs"
          component={InformationScreen_Signs}
        />
        <Stack.Screen name="Resources" component={Resources} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
