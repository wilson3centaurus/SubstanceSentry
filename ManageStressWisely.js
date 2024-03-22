import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"; // Free icon library

const ManageStressWisely = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.heroSection}>
        <Image
          source={require("./images/stress-management.jpg")} // Replace with a relevant image
          style={styles.heroImage}
        />
        <Text style={styles.heroTitle}>
          Manage Stress Wisely: Develop Healthy Coping Skills
        </Text>
      </View>
      <View style={styles.contentSection}>
        <Text style={styles.contentTitle}>
          Why are healthy coping skills important?
        </Text>
        <Text style={styles.contentText}>
          Life can be stressful, and everyone experiences challenges. Having
          healthy coping skills equips you to manage stress effectively,
          preventing it from leading to unhealthy behaviors. Here's how:
        </Text>
        <View style={styles.reasonsList}>
          <View style={styles.reasonItem}>
            <MaterialCommunityIcons
              name="shield-check"
              size={32}
              color="#007bff"
              style={styles.reasonIcon}
            />
            <Text style={styles.reasonText}>Reduce Stress and Anxiety</Text>
          </View>
          <View style={styles.reasonItem}>
            <MaterialCommunityIcons
              name="heart-outline"
              size={32}
              color="#007bff"
              style={styles.reasonIcon}
            />
            <Text style={styles.reasonText}>
              Improve Your Emotional Wellbeing
            </Text>
          </View>
          <View style={styles.reasonItem}>
            <MaterialCommunityIcons
              name="brain"
              size={32}
              color="#007bff"
              style={styles.reasonIcon}
            />
            <Text style={styles.reasonText}>
              Promote Clear Thinking and Decision Making
            </Text>
          </View>
          <View style={styles.reasonItem}>
            <MaterialCommunityIcons
              name="handshake-outline"
              size={32}
              color="#007bff"
              style={styles.reasonIcon}
            />
            <Text style={styles.reasonText}>
              Maintain Healthy Relationships
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Explore Coping Mechanisms</Text>
          <MaterialCommunityIcons
            name="chevron-right"
            size={24}
            color="#fff"
            style={styles.actionButtonIcon}
          />
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
    justifyContent: "center",
    marginBottom: 20,
  },
  reasonItem: {
    alignItems: "center",
    marginRight: 10,
    marginBottom: 10,
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 10,
    width: 400,
    height: 80,
    backgroundColor: '',
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

export default ManageStressWisely;
