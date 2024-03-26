import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Linking, TextInput, Alert, ScrollView } from 'react-native';
import { List, Avatar, Title, IconButton, Divider } from 'react-native-paper';
import Mailer from 'react-native-mail';

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [feedbackEmail, setFeedbackEmail] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleOpenPrivacyPolicy = () => {
    Linking.openURL('https://privacy-policy-url');
  };

  const handleOpenAboutUs = () => {
    Linking.openURL('https://about-us-url'); // Replace with your about us URL
  };

  const handleShareApp = () => {
    // Replace with your app's download link
    const url = 'https://your-app-download-link';
    const message = 'Check out this helpful app for drug abuse awareness!';
    Linking.openURL(`whatsapp://send?text=${message} ${url}`); // Share via WhatsApp (adjust for other platforms)
  };

  const sendFeedback = () => {
    if (!feedbackEmail || !feedbackMessage) {
      Alert.alert('Please enter email and feedback message');
      return;
    }

    const mailOptions = {
      from: feedbackEmail,
      recipients: ['tafadzwawilsonsedze@gmail.com'],
      subject: 'App Feedback',
      body: feedbackMessage,
    };

    Mailer.compose(mailOptions)
      .then(() => {
        Alert.alert('Feedback sent successfully!');
        setFeedbackEmail('');
        setFeedbackMessage('');
      })
      .catch((error) => {
        Alert.alert('Error sending feedback:', error.message);
      });
  };

  const toggleNotifications = () => setNotificationsEnabled(!notificationsEnabled);
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

      <ScrollView style={styles.strollContainer}>
        <List.Section title="General">
          <List.Item
            title="Share App"
            left={() => (
              <Avatar.Icon
                icon="share"
                size={40}
                marginLeft={10}
                backgroundColor={"#0173b1"}
              />
            )}
            onPress={handleShareApp}
          />
        </List.Section>

        <Divider />

        <List.Section title="Appearance">
          <List.Item
            title="Dark Mode"
            left={() => (
              <Switch
                value={darkModeEnabled}
                onValueChange={toggleDarkMode}
                marginLeft={10}
              />
            )}
            right={() => (
              <IconButton
                icon={darkModeEnabled ? "brightness-7" : "brightness-4"}
                color="#000"
              />
            )}
          />
        </List.Section>

        <Divider />

        <List.Section title="About">
          <List.Item
            title="Privacy Policy"
            left={() => (
              <Avatar.Icon
                icon="lock"
                size={40}
                marginLeft={10}
                backgroundColor={"#0173b1"}
              />
            )}
            onPress={handleOpenPrivacyPolicy}
          />
          <List.Item
            title="About Us"
            left={() => (
              <Avatar.Icon
                icon="information"
                size={40}
                marginLeft={10}
                backgroundColor={"#0173b1"}
              />
            )}
            onPress={handleOpenAboutUs}
          />
        </List.Section>

        <Divider />

        <List.Section title="Developers">
          <List.Item
            title="Contact the Developers"
            left={() => (
              <Avatar.Icon
                icon="email"
                size={40}
                marginLeft={10}
                backgroundColor={"#0173b1"}
              />
            )}
            onPress={() =>
              Linking.openURL("mailto:tafadzwawilsonsedze@gmail.com")
            }
          />
          <List.Item
            title="Buy Us a Coffee"
            left={() => (
              <Avatar.Icon
                icon="coffee"
                size={40}
                marginLeft={10}
                backgroundColor={"#0173b1"}
              />
            )}
            onPress={() => Linking.openURL("https://your-donation-link")}
          />
        </List.Section>

        <Divider />

        <List.Section title="Feedback" style={styles.feedback}>
          <TextInput
            style={styles.feedbackInput}
            placeholder="Enter your email"
            value={feedbackEmail}
            onChangeText={setFeedbackEmail}
          />
          <TextInput
            style={styles.feedbackInput}
            placeholder="Write your feedback here"
            multiline={true}
            numberOfLines={4}
            value={feedbackMessage}
            onChangeText={setFeedbackMessage}
          />
          <TouchableOpacity
            style={styles.feedbackButton}
            onPress={sendFeedback}
          >
            <Text style={styles.feedbackButtonText}>Send Feedback</Text>
          </TouchableOpacity>
        </List.Section>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#0173b1",
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
  },
  iconStyle: {
    color: "#0173b1",
  },
  feedback: {
    backgroundColor: "#C6E5DD",
  },
  feedbackInput: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  feedbackButton: {
    backgroundColor: "#0173b1",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    //width: "100%",
    textAlign: "center",
    marginBottom: 50,
    marginLeft: 20,
    marginRight: 20,
  },
  feedbackButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Settings;

