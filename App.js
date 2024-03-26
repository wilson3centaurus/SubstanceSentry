// App.js

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import LoadingScreen from "./scripts/LoadingScreen";
import HomeScreen from "./scripts/HomeScreen";
import InformationScreen from "./scripts/InformationScreen";
import InformationScreen_Drugs from "./scripts/InformationScreen_Drugs";
import InformationScreen_Effects from "./scripts/InformationScreen_Effects";
import InformationScreen_Signs from "./scripts/InformationScreen_Signs";
import Prevention from "./scripts/Prevention";
import Resources from "./scripts/Resources";
import Settings from "./scripts/Settings";
import Statistics from "./scripts/Statistics";
import Emergency from "./scripts/Emergency";
import ConnectAndThrive from "./scripts/ConnectAndThrive";
import ManageStressWisely from "./scripts/ManageStressWisely";
import LearnAndEmpower from "./scripts/LearnAndEmpower";
import RecoveryStories from "./scripts/RecoveryStories";
import SupportTreatment from "./scripts/SupportTreatment";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoadingScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="InformationScreen" component={InformationScreen} />
        <Stack.Screen name="Settings" component={Settings} />
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
        <Stack.Screen name="SupportTreatment" component={SupportTreatment} />
        <Stack.Screen name="Emergency" component={Emergency} />
        <Stack.Screen name="Statistics" component={Statistics} />
        <Stack.Screen
          name="ManageStressWisely"
          component={ManageStressWisely}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
