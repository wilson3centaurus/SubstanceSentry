import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"; // Free icon library
import { useNavigation } from "@react-navigation/native";

const Prevention = () => {
  const navigation = useNavigation();

  const cards = [
    {
      title: "Build Strong Relationships",
      description:
        "Surround yourself with positive, supportive people who encourage healthy habits.",
      icon: "account-multiple",
      backgroundColor: "#CEE5E7",
      onPress: () => {
        navigation.navigate("ConnectAndThrive");
      },
    },
    {
      title: "Develop Healthy Coping Skills",
      description:
        "Learn stress management techniques and healthy ways to deal with difficult emotions.",
      icon: "anchor",
      backgroundColor: "#CEE5E7",
      onPress: () => {
        navigation.navigate("ManageStressWisely");
      },
    },
    {
      title: "Empower Yourself with Knowledge",
      description:
        "Educate yourself about addiction, its triggers, and how to prevent it.",
      icon: "book-open-outline",
      backgroundColor: "#CEE5E7",
      onPress: () => {
        // Handle click on "Empower Yourself with Knowledge" card
        console.log("Gaining knowledge about addiction...");
      },
    },
    {
      title: "Find Inspiration in Recovery Stories",
      description:
        "Read or listen to stories of people who overcame addiction.",
      icon: "account-heart",
      backgroundColor: "#CEE5E7",
      onPress: () => {
        // Handle click on "Find Inspiration in Recovery Stories" card
        console.log("Finding inspiration in recovery stories...");
      },
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image
          source={require("./images/benjamin-voros-phIFdC6lA4E-unsplash.jpg")}
          style={styles.bannerImage}
          blurRadius={5}
        />
        <Text style={styles.appName}>Strategies for Prevention</Text>
        <Text style={styles.bannerText}>
          Break the Cycle. Choose Prevention.
        </Text>
      </View>
      {cards.map((card) => (
        <TouchableOpacity
          key={card.title}
          style={[styles.card, { backgroundColor: card.backgroundColor }]}
          onPress={card.onPress}
        >
          <MaterialCommunityIcons
            name={card.icon}
            size={40}
            color="#007bff"
            style={styles.cardIcon}
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{card.title}</Text>
            <Text style={styles.cardDescription}>{card.description}</Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={24}
            color="#007bff"
            style={styles.cardArrow}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
    position: "absolute",
    bottom: 40,
    left: 20,
    right: 0,
    marginLeft: 10,
  },
  bannerText: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 0,
    color: "#ffcce6",
    fontSize: 17,
    fontStyle: "italic",
    marginLeft: 10,
  },
  card: {
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  cardIcon: {
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 16,
  },
  cardArrow: {
    marginLeft: "auto",
  },
});

export default Prevention;
