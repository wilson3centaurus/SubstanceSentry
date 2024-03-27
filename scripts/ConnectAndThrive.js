import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ConnectAndThrive = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.heroSection}>
        <Image
          source={require("../images/friends-laughing.jpg")}
          style={styles.heroImage}
        />
        <Text style={styles.heroTitle}>
          Connect and Thrive: The Power of Strong Relationships
        </Text>
      </View>
      <View style={styles.contentSection}>
        <Text style={styles.contentTitle}>
          Why are strong relationships important?
        </Text>
        <Text style={styles.contentText}>
          Surrounding yourself with positive, supportive people can be a
          powerful tool in preventing addiction and promoting overall
          well-being. Here's how strong relationships can help:
        </Text>
        <View style={styles.reasonsList}>
          <View style={styles.reasonItem}>
            <MaterialCommunityIcons
              name="account-group"
              size={50}
              color="#007bff"
              style={styles.reasonIcon}
            />
            <Text style={styles.reasonText}>
              Offer Encouragement and Support
            </Text>
          </View>
          <View style={styles.reasonItem}>
            <MaterialCommunityIcons
              name="shield-account"
              size={50}
              color="#007bff"
              style={styles.reasonIcon}
            />
            <Text style={styles.reasonText}>Help You Make Healthy Choices</Text>
          </View>
          <View style={styles.reasonItem}>
            <MaterialCommunityIcons
              name="account-multiple-outline"
              size={50}
              color="#007bff"
              style={styles.reasonIcon}
            />
            <Text style={styles.reasonText}>Reduce Feelings of Isolation</Text>
          </View>
          <View style={styles.reasonItem}>
            <MaterialCommunityIcons
              name="account-heart"
              size={50}
              color="#007bff"
              style={styles.reasonIcon}
            />
            <Text style={styles.reasonText}>
              Boost Self-Esteem and Confidence
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate("SupportTreatment")}>
          <Text style={styles.actionButtonText}>Find Your Support Group</Text>
          <MaterialCommunityIcons
            name="chevron-right"
            size={50}
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
    fontStyle: "italic",
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
    borderRadius: 10,
    width: 400,
    height: 99,
    backgroundColor: "#CEE5E7",
  },
  reasonIcon: {
    marginBottom: 5,
  },
  reasonText: {
    fontSize: 17,
    color: "#12305A",
    fontWeight: "bold",
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

export default ConnectAndThrive;
