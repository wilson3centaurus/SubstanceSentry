import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Linking,
} from "react-native";
import { List, Avatar, Title, IconButton } from "react-native-paper";

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const handleOpenPrivacyPolicy = () => {
    Linking.openURL("https://your-app-privacy-policy-url"); // Replace with your policy URL
  };

  const handleOpenAboutUs = () => {
    Linking.openURL("https://your-app-about-us-url"); // Replace with your about us URL
  };

  const toggleNotifications = () =>
    setNotificationsEnabled(!notificationsEnabled);
  const toggleDarkMode = () => setDarkModeEnabled(!darkModeEnabled);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title style={styles.headerText}>Settings</Title>
        <IconButton
          icon="tune"
          color="#fff"
          onPress={() => {
            /* Handle advanced settings */
          }}
        />
      </View>

      <List.Section title="Notifications">
        <List.Item
          title="Receive App Notifications"
          left={() => (
            <Switch
              value={notificationsEnabled}
              onValueChange={toggleNotifications}
            />
          )}
          right={() => (
            <IconButton
              icon={notificationsEnabled ? "bell" : "bell-off"}
              color="#000"
            />
          )}
        />
      </List.Section>

      <List.Section title="Appearance">
        <List.Item
          title="Dark Mode"
          left={() => (
            <Switch value={darkModeEnabled} onValueChange={toggleDarkMode} />
          )}
          right={() => (
            <IconButton
              icon={darkModeEnabled ? "brightness-7" : "brightness-4"}
              color="#000"
            />
          )}
        />
      </List.Section>

      <List.Section title="About">
        <List.Item
          title="Privacy Policy"
          left={() => <Avatar.Icon icon="lock" />}
          onPress={handleOpenPrivacyPolicy}
        />
        <List.Item
          title="About Us"
          left={() => <Avatar.Icon icon="information" />}
          onPress={handleOpenAboutUs}
        />
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5", // Light background
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#4CAF50", // Green header
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
  },
});

export default Settings;
