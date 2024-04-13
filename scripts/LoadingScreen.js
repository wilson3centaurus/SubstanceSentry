// LoadingScreen.js

import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, Animated } from "react-native";
import backgroundImage from "../images/img (4).jpg";
import logoImage from "../images/logo.jpg";

const LoadingScreen = ({ navigation }) => {
  const [loadingProgress, setLoadingProgress] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(loadingProgress, {
      toValue: 1,
      duration: 5000, // 10000 milliseconds (10 seconds)
      useNativeDriver: false,
    }).start(() => {
      // Transition to home screen after loading
      navigation.replace("HomeScreen");
    });
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={backgroundImage}
        style={styles.backgroundImage}
      />
      <Image source={logoImage} style={styles.logo} />
      <Text style={styles.appName}>Substance Sentry</Text>
      <Text style={styles.description}>
        An anti-drug and substance abuse app_
      </Text>
      <View style={styles.progressBarContainer}>
        <Animated.View
          style={[
            styles.progressBar,
            {
              width: loadingProgress.interpolate({
                inputRange: [0, 1],
                outputRange: ["0%", "100%"],
              }),
            },
          ]}
        />
      </View>
      <Text style={styles.footer}>
        Manicaland State University Of Applied Sciences Innovation Project
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#8E1E1E",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    //opacity: 0.7,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
    marginTop: 100,
  },
  appName: {
    fontSize: 45,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: "#C7C3FF",
  },
  footer: {
    position: "absolute",
    bottom: 20,
    fontSize: 12,
    fontStyle: "italic",
    color: "#fff",
  },
  progressBarContainer: {
    width: "80%",
    marginTop: 300,
  },
  progressBar: {
    height: 3,
    backgroundColor: "#fff",
    position: "relative",
    width: "100%",
  },
});

export default LoadingScreen;
