import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SupportTreatment = () => {
  const [expandedCards, setExpandedCards] = useState([]);

  const handleCardPress = (index) => {
    const newExpandedCards = [...expandedCards];
    newExpandedCards[index] = !newExpandedCards[index];
    setExpandedCards(newExpandedCards);
  };

  // Sample data (replace with actual information)
  const supportGroups = [
    { name: "Harare Recovery Group", contact: "+0242-700100" },
    { name: "Bulawayo Support Network", contact: "+0912-345678" },
    { name: "Highlands Halfway Home", contact: "+2638644210999" },
    { name: "Ruwa Rehabilitation Centre", contact: "+263273790238" },
    { name: "Mubatirapamwe Trust", contact: "+263772379751" },

    { name: "\n\nOnline Support Groups", contact: "\n\n" },
    {
      name: "Faces & Voices of Recovery Online",
      contact: "https://facesandvoicesofrecovery.org/",
      icon: "earth", // Replace with a suitable icon name (e.g., "link")
    },
    {
      name: "SMART Recovery Online",
      contact: "https://www.smartrecovery.org/online/",
      icon: "earth", // Replace with a suitable icon name (e.g., "link")
    },
    {
      name: "National Alliance on Mental Illness (NAMI) HelpLine",
      contact: "1-800-950-NAMI (6264)",
      icon: "phone", // Replace with a suitable icon name (e.g., "phone")
    },
    {
      name: "The Jed Foundation",
      contact: "https://www.jedfoundation.org/",
      icon: "earth", // Replace with a suitable icon name (e.g., "link")
    },
    {
      name: "National Council on Alcoholism and Drug Dependence (NCADD)",
      contact: "1-800-622-2255",
      icon: "phone", // Replace with a suitable icon name (e.g., "phone")
    },
  ];

  const counsellingServices = [
    // Sample counselling service information
  ];

  // ... similar data structures for other cards

  const icons = [
    "account-group", // Support Groups
    "heart-outline", // Counselling Services
    "hospital-building", // Rehab Services
    "map-marker-outline", // Geolocation Support
    "book-open-page-variant", // Testimonials
  ];

return (
  <View style={styles.container}>
    <View style={styles.banner}>
      <Image
        source={require("./images/benjamin-voros-phIFdC6lA4E-unsplash.jpg")}
        style={styles.bannerImage}
        blurRadius={5}
      />
      <Text style={styles.appName}>Support and Treatment</Text>
      <Text style={styles.bannerText}>
        Support Beacon: Your Path to Recovery
      </Text>
    </View>
    <View style={styles.cardsContainer}>
      {[
        "Support Groups",
        "Counselling Services",
        "Rehab Services",
        "Geolocation Support",
        "Testimonials",
      ].map((cardTitle, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => handleCardPress(index)}
        >
          <View style={styles.cardHeader}>
            <MaterialCommunityIcons
              name={icons[index]}
              size={24}
              color="#007bff"
            />
            <Text style={styles.cardTitle}>{cardTitle}</Text>
            {expandedCards[index] && (
              <MaterialCommunityIcons
                name="chevron-down"
                size={24}
                color="#007bff"
              />
            )}
          </View>
          {expandedCards[index] && (
            <View style={styles.cardContent}>
              {/* Display detailed information for each card here based on the index */}
              {index === 0 && (
                <>
                  <Text style={styles.boldText}>
                    Here's a list of local support groups in Zimbabwe:
                  </Text>
                  {supportGroups.slice(0, 5).map(
                    (
                      group // Only show first 5 groups (local)
                    ) => (
                      <Text key={group.name}>
                        {group.name} - {group.contact}
                      </Text>
                    )
                  )}
                  <Text style={styles.boldText}>Online Support Groups:</Text>
                  {supportGroups.slice(6).map(
                    (
                      group // Show online groups starting from index 6
                    ) => (
                      <View key={group.name} style={styles.onlineGroup}>
                        <MaterialCommunityIcons
                          name={group.icon}
                          size={20}
                          color="#007bff"
                        />
                        <Text style={styles.boldText}>{group.name}</Text>
                      </View>
                    )
                  )}
                </>
              )}
              {/* ... populate content for other cards based on your data structures */}
            </View>
          )}
        </TouchableOpacity>
      ))}
    </View>
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
  cardsContainer: {
    flex: 1,
  },
  card: {
    borderRadius: 10,
    padding: 15,
    flexDirection: "column",
    alignItems: "center",
    margin: 10,
    paddingBottom: 20,
    //height: 50,
    backgroundColor: "#CEE5E7",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    flex: 1,
  },
  cardContent: {
    marginTop: 20,
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
  },
  onlineGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    //marginLeft: 20,
  },
});

export default SupportTreatment;
