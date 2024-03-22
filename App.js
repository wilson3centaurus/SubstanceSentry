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
import ConnectAndThrive from "./ConnectAndThrive";
import ManageStressWisely from "./ManageStressWisely";
import LearnAndEmpower from "./LearnAndEmpower";
import RecoveryStories from "./RecoveryStories";

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
        <Stack.Screen name="Prevention" component={Prevention} />
        <Stack.Screen name="ConnectAndThrive" component={ConnectAndThrive} />
        <Stack.Screen name="LearnAndEmpower" component={LearnAndEmpower} />
        <Stack.Screen name="RecoveryStories" component={RecoveryStories} />
        <Stack.Screen
          name="ManageStressWisely"
          component={ManageStressWisely}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
