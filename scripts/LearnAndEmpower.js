import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const LearnAndEmpower = () => {
  const booksData = [
    {
      title: "The Unexpected Journey of Addiction: A Memoir",
      author: "Gabrielle Kazan",
      imageUrl: require("../images/book2.png"), // Replace with your image path
      description:
        "A powerful and inspiring memoir that chronicles the author's journey through addiction and recovery.",
    },
    {
      title: "Breaking the Chains of Addiction: A Holistic Approach",
      author: "Dr. David Jones",
      imageUrl: require("../images/book1.png"), // Replace with your image path
      description:
        "This book explores the physical, emotional, and social aspects of addiction, offering a comprehensive guide to recovery.",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.heroSection}>
        <Image
          source={require("../images/knowledge-is-power.jpg")}
          style={styles.heroImage}
        />
        <Text style={styles.heroTitle}>
          Empower Yourself with Knowledge: Break the Cycle
        </Text>
      </View>
      <View style={styles.contentSection}>
        <Text style={styles.contentTitle}>Why is knowledge empowering?</Text>
        <Text style={styles.contentText}>
          Understanding addiction and its causes equips you to make informed
          choices and develop healthy coping mechanisms. Knowledge empowers you
          to:
        </Text>
        <View style={styles.reasonsList}>
          <View style={styles.reasonItem}>
            <MaterialCommunityIcons
              name="lightbulb-outline"
              size={40}
              color="#007bff"
              style={styles.reasonIcon}
            />
            <Text style={styles.reasonText}>Identify Triggers and Risks</Text>
          </View>
          <View style={styles.reasonItem}>
            <MaterialCommunityIcons
              name="information-outline"
              size={40}
              color="#007bff"
              style={styles.reasonIcon}
            />
            <Text style={styles.reasonText}>Explore Treatment Options</Text>
          </View>
          <View style={styles.reasonItem}>
            <MaterialCommunityIcons
              name="shield-account"
              size={40}
              color="#007bff"
              style={styles.reasonIcon}
            />
            <Text style={styles.reasonText}>
              Make Informed Decisions About Your Wellbeing
            </Text>
          </View>
          <View style={styles.reasonItem}>
            <MaterialCommunityIcons
              name="book-open-variant"
              size={40}
              color="#007bff"
              style={styles.reasonIcon}
            />
            <Text style={styles.reasonText}>
              Gain Confidence and Hope for Recovery
            </Text>
          </View>
        </View>
        <View style={styles.resourcesSection}>
          <Text style={styles.resourcesTitle}>Recommended Resources:</Text>
          {booksData.map((book) => (
            <View key={book.title} style={styles.bookItem}>
              <Image source={book.imageUrl} style={styles.bookImage} />
              <View style={styles.bookInfo}>
                <Text style={styles.bookTitle}>{book.title}</Text>
                <Text style={styles.bookAuthor}>{book.author}</Text>
                <Text style={styles.bookDescription}>{book.description}</Text>
              </View>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>
            Learn More About Addiction
          </Text>
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
    fontSize: 16,
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
  resourcesSection: {
    marginBottom: 40,
  },
  resourcesTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
  },
  bookItem: {
    flexDirection: "row",
    marginBottom: 20,
  },
  bookImage: {
    width: 80,
    height: 120,
    marginRight: 10,
    borderRadius: 5,
  },
  bookInfo: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  bookAuthor: {
    fontSize: 14,
    fontStyle: "italic",
    marginBottom: 5,
  },
  bookDescription: {
    fontSize: 14,
  },
});

export default LearnAndEmpower;