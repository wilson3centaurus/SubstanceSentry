import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import backgroundImage from "./images/Aerial_V2_960_e4f16d9ab2de9e07fc69b471b386ba4b.jpg";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image
          source={require("./images/Sierra_960_5dd659bfa2f7821d69fc15de08717289.jpg")}
          style={styles.bannerImage}
        />
        <Text style={styles.appName}>Substance Sentry</Text>
        <Text style={styles.bannerText}>Take control of your life today!</Text>
      </View>

      <View style={styles.cardsContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("InformationScreen")}
        >
          <MaterialCommunityIcons name="lightbulb" size={50} color="#fff" />
          <Text style={styles.cardText}>Get Informed</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Prevention")}
        >
          <MaterialCommunityIcons name="shield-check" size={50} color="#fff" />
          <Text style={styles.cardText}>Prevention and Education</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("SupportTreatment")}
        >
          <MaterialCommunityIcons name="heart-outline" size={50} color="#fff" />
          <Text style={styles.cardText}>Support and Treatment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Emergency")}
        >
          <MaterialCommunityIcons name="alert-circle" size={50} color="#fff" />
          <Text style={styles.cardText}>Emergency Assistance</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Statistics")}
        >
          <MaterialCommunityIcons name="chart-bar" size={50} color="#fff" />
          <Text style={styles.cardText}>Statistics</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("")}
        >
          <MaterialCommunityIcons name="cog" size={50} color="#fff" />
          <Text style={styles.cardText}>Settings</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navigation}>
        <Text style={styles.quotes}>Did you know?</Text>
        <Text style={styles.quote}>
          Anti drug and substance abuse quotes here...
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    //opacity: 0.7,
  },
  banner: {
    flex: 1,
    position: "relative",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
  },
  appName: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#ffe6f3",
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
    textAlign: "center",
  },
  bannerText: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    color: "#ffcce6",
    fontSize: 17,
    textAlign: "center",
    fontStyle: "italic",
  },
  cardsContainer: {
    flex: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    gap: 9,
    backgroundColor: "#689eca",
    paddingTop: 4,
  },
  card: {
    alignItems: "center",
    padding: 10,
    borderWidth: 2,
    borderColor: "#002e60",
    borderRadius: 7,
    width: "47%",
    height: "30%",
    marginTop: 10,
    backgroundColor: "#0173b1",
    paddingTop: 20,
    //opacity: 0.5,
  },
  cardIcon: {
    width: 50,
    height: 50,
  },
  cardText: {
    fontSize: 16,
    marginTop: 20,
    textAlign: "center",
    color: "#fff",
  },
  navigation: {
    alignItems: "center",
    backgroundColor: "#002e60",
    height: 60,
  },
  quotes: {
    color: "#050a14",
    fontSize: 20,
  },
  quote: {
    color: "#99b3e6",
  },
});

export default HomeScreen;
