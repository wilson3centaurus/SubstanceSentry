import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

const storiesData = [
  {
    id: 1,
    title: "From Party Girl to Yoga Instructor: Lisa's Transformation",
    imageUrl: require("./images/testimonial (1).jpg"), // Replace with your image
    description:
      "Lisa struggled with alcohol dependence for years. After hitting rock bottom, she discovered yoga and mindfulness practices, which became her path to recovery and a newfound passion for helping others.",
  },
  {
    id: 2,
    title: "Finding Purpose Through Music: David's Story",
    imageUrl: require("./images/testimonial (2).jpg"), // Replace with your image
    description:
      "David battled addiction for most of his adult life. Through music therapy and reconnecting with his passion for songwriting, he found a healthy outlet for expression and rebuilt his life.",
  },
  // Add more stories following the same format
];

const RecoveryStories = () => {
  const [currentStory, setCurrentStory] = useState(null);

  const handleStoryPress = (story) => {
    setCurrentStory(story);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.heroSection}>
        {/* Replace with a carousel component for multiple images */}
        <Image
          source={require("./images/benjamin-voros-phIFdC6lA4E-unsplash.jpg")}
          style={styles.heroImage}
        />
        <Text style={styles.heroTitle}>
          Find Your Light: Real People, Real Recovery Stories
        </Text>
      </View>
      <View style={styles.storyWall}>
        {storiesData.map((story) => (
          <TouchableOpacity
            key={story.id}
            style={styles.storyItem}
            onPress={() => handleStoryPress(story)}
          >
            <Image source={story.imageUrl} style={styles.storyImage} />
            <View style={styles.storyInfo}>
              <Text style={styles.storyTitle}>{story.title}</Text>
              <Text style={styles.storyTeaser}>
                {story.description.substring(0, 60) + "..."}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      {currentStory && (
        <View style={styles.fullStory}>
          <Text style={styles.fullStoryTitle}>{currentStory.title}</Text>
          <Text style={styles.fullStoryText}>{currentStory.description}</Text>
          {/* Add a button to close the full story view if needed */}
        </View>
      )}
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
  storyWall: {
    marginBottom: 200,
    alignItems: "center",
    borderRadius: 10,
    width: 400,
    height: 99,
  },
  storyItem: {
    flexDirection: "row",
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#D0E7EA",
    padding: 10,
    width: 400,
    height: 130,
    borderColor: "#9199AE",
    borderWidth: 1,
  },
  storyImage: {
    width: 90,
    height: 130,
    marginRight: 10,
    marginLeft: -10,
    marginTop: -10,
    borderRadius: 5,
  },
  storyInfo: {
    flex: 1,
  },
  storyTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  storyTeaser: {
    fontSize: 14,
  },
  fullStory: {
    marginBottom: 40,
    padding: 15,
    backgroundColor: "#89ABB1",
    borderRadius: 10,
  },
  fullStoryTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RecoveryStories;
