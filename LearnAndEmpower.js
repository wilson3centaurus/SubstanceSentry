import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const LearnAndEmpower = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.heroSection}>
        <Image
          source={require("./images/knowledge-is-power.jpg")}
          style={styles.heroImage}
        />
        <Text style={styles.heroTitle}>Empower Yourself with Knowledge: Break the Cycle</Text>
      </View>
      <View style={styles.contentSection}>
        <Text style={styles.contentTitle}>Why is knowledge empowering?</Text>
        <Text style={styles.contentText}>
          Understanding addiction and its causes equips you to make informed choices and develop healthy coping mechanisms. Knowledge empowers you to:
        </Text>
        <View style={styles.reasonsList}>
          <View style={styles.reasonItem}>
            <MaterialCommunityIcons name="lightbulb-outline" size={32} color="#007bff" style={styles.reasonIcon} />
            <Text style={styles.reasonText}>Identify Triggers and Risks</Text>
          </View>
          <View style={styles.reasonItem}>
            <MaterialCommunityIcons name="information-outline" size={32} color="#007bff" style={styles.reasonIcon} />
            <Text style={styles.reasonText}>Explore Treatment Options</Text>
          </View>
          <View style={styles.reasonItem}>
            <MaterialCommunityIcons name="shield-account" size={32} color="#007bff" style={styles.reasonIcon} />
            <Text style={styles.reasonText}>Make Informed Decisions About Your Wellbeing</Text>
          </View>
          <View style={styles.reasonItem}>
            <MaterialCommunityIcons name="book-open-variant" size={32} color="#007bff" style={styles.reasonIcon} />
            <Text style={styles.reasonText}>Gain Confidence and Hope for Recovery</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Learn More About Addiction</Text>
          <MaterialCommunityIcons name="chevron-right" size={24} color="#fff" style={styles.actionButtonIcon} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heroSection: {
    marginBottom: 20,
  },
  heroImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  contentSection: {
    marginBottom: 40,
  },
  contentTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  contentText: {
    lineHeight: 20,
    marginBottom: 20,
  },
  reasonsList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  reasonItem: {
    alignItems: "center",
    marginRight: 10,
    marginBottom: 10,
  },
  reasonIcon: {
    marginBottom: 5,
  },
  reasonText: {
    fontSize: 16,
  },
  actionButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  actionButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  actionButtonIcon: {
    marginLeft: 10,
  },
});

export default LearnAndEmpower;