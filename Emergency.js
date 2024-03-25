import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faInfoCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { Text, View, Button, Linking, StyleSheet } from 'react-native'; // Assuming React Native

const Emergency = () => {
  const emergencyNumbers = [
    { name: "Emergency Services", number: "102" }, // Replace with local emergency number
    { name: "Drug & Poison Control", number: "110" },  // Replace with local number
  ];

  const [showOverdoseInfo, setShowOverdoseInfo] = useState(false); // State for overdose info visibility

  const handleCallPress = (number) => {
    Linking.openURL(`tel:${number}`); // Dials the emergency number
  };

  const toggleOverdoseInfo = () => {
    setShowOverdoseInfo(!showOverdoseInfo); // Toggle overdose info visibility
  };

  return (
    <View style={styles.emergencyContainer}>
      <Text style={styles.emergencyTitle}>In Case of Emergency</Text>
      <View style={styles.emergencyNumbers}>
        {emergencyNumbers.map((number) => (
          <View key={number.name} style={styles.numberCard}>
            <FontAwesomeIcon icon={faPhoneAlt} style={styles.phoneIcon} />
            <Text style={styles.numberName}>{number.name}</Text>
            <Text style={styles.numberText}>{number.number}</Text>
            <Button 
              title="Call Now"
              onPress={() => handleCallPress(number.number)}
            />
          </View>
        ))}
      </View>
      <View style={styles.overdoseInfo}>
        <Button 
          title={showOverdoseInfo ? "Hide Overdose Info" : "Show Overdose Info"}
          onPress={toggleOverdoseInfo}
          icon={showOverdoseInfo ? <FontAwesomeIcon icon={faInfoCircle} style={styles.infoIcon} /> : <FontAwesomeIcon icon={faExclamationTriangle} style={styles.warningIcon} />}
        />
        {showOverdoseInfo && (
          <View style={styles.infoContent}>
            {/* Overdose Information & First Aid Steps */}
            <Text style={styles.infoTitle}>Signs and Symptoms of Overdose:</Text>
            <Text style={styles.infoText}>- List symptoms here (drowsiness, confusion, etc.)</Text>
            <Text style={styles.infoTitle}>What to Do in Case of Overdose:</Text>
            <Text style={styles.infoText}>
              1. Call emergency services immediately (dial the numbers above).
              2. Stay calm and check for breathing.
              3. If not breathing, perform CPR if trained.
              4. Stay with the person until help arrives.
            </Text>
            {/* ... Add additional information and first aid steps as needed */}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emergencyContainer: {
    flex: 1,
    padding: 20,
  },
  emergencyTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  emergencyNumbers: {
    marginBottom: 20,
  },
  numberCard: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
  },
  phoneIcon: {
    fontSize: 20,
    marginRight: 10,
    color: "#007bff",
  },
  numberName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  numberText: {
    flex: 1,
  },
  overdoseInfo: {
    marginBottom: 20,
  },
  infoButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoIcon: {
    fontSize: 18,
    marginRight: 10,
    color: "#007bff",
  },
  warningIcon: {
    fontSize: 18,
    marginRight: 10,
    color: "#ff9800", // Orange for warning
  },
  infoContent: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  infoText: {
    marginBottom: 10,
  },
});

export default Emergency;
