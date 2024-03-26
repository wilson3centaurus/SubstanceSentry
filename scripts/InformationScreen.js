import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons"; // Import icons

const InformationScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image
          source={require("../images/peaceful-wallpaper-1366x768.jpg")}
          style={styles.bannerImage}
        />
        <Text style={styles.appName}>Get Information</Text>
        <Text style={styles.bannerText}>
          Know more about drugs, effects and signs of abuse.
        </Text>
      </View>
      <View style={styles.cardsContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("InformationScreen_Drugs")}
        >
          <Image
            source={require("../images/drugs-icon.png")}
            style={{width: "12%", height: "60%"}}
          />
          <Text style={styles.cardText}>Drug and Substance abuse</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("InformationScreen_Effects")}
        >
          <MaterialCommunityIcons name="blur" size={50} color="#fff" />
          <Text style={styles.cardText}>Effects of drugs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("InformationScreen_Signs")}
        >
          <MaterialCommunityIcons name="alert-circle" size={50} color="#fff" />
          <Text style={styles.cardText}>Signs of Abuse</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Resources")}
        >
          <MaterialCommunityIcons
            name="book-open-outline"
            size={50}
            color="#fff"
          />
          <Text style={styles.cardText}>Resources</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    position: "relative",
    height: "30%",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
  },
  appName: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#ffe6f3",
    position: "absolute",
    bottom: 50,
    left: 3,
    right: 0,
    marginLeft: 10,
  },
  bannerText: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    color: "#ffcce6",
    fontSize: 17,
    fontStyle: "italic",
    marginLeft: 10,
  },
  cardsContainer: {
    display: "flex",
    flex: 4,
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    maxWidth: "100%",
    height: "100%",
    gap: 9,
    backgroundColor: "#72a7d3",
    paddingTop: 30,
  },
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 2,
    borderRadius: 7,
    width: "95%",
    height: "20%",
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: "#0173b1",
    borderColor: "#002e60",
  },
  cardIcon: {
    width: 50,
    height: 50,
  },
  cardText: {
    fontSize: 17,
    marginLeft: 20,
    textAlign: "center",
    color: "#fff",
  },
});

export default InformationScreen;
