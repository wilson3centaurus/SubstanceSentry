import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View, Button, Linking, StyleSheet, Image, ScrollView } from 'react-native';

const Emergency = () => {
  const emergencyNumbers = [
    { name: "Police", number: "995" },
    { name: "Ambulance", number: "102" },
    { name: "Fire Brigade", number: "993" },
    { name: "Childline Zimbabwe", number: "116" },
    { name: "Harare City Council Ambulance", number: "+263 4 705905" },
    {
      name: "Youth and Adolescents Counselling Centre (YAC Zimbabwe)",
      number: "+263 4 774 080",
      website: "https://www.yaczw.org/",
    },
    {
      name: "National AIDS Council (NAC) - Drug Abuse Services",
      number: "+263 4 704 941",
      website: "https://www.nac.gov.zw/",
    },
    {
      name: "Zimbabwe Association of Mental Health Professionals (ZAMHP)",
      number: "+263 4 776 234",
      website: "https://www.zamhp.org.zw/",
    },
  ];

  const [openCards, setOpenCards] = useState({
    numbers: false,
    overdose: false,
    firstAid: false,
  });

  const toggleCard = (cardName) => {
    setOpenCards({ ...openCards, [cardName]: !openCards[cardName] });
  };

  const handleCallPress = (number) => {
    Linking.openURL(`tel:${number}`); // Dials the emergency number
  };

  return (
    <View style={styles.emergencyContainer}>
      <View style={styles.heroSection}>
        <Image
          source={require("../images/emergency.png")}
          style={styles.heroImage}
        />
        <Text style={styles.heroTitle}>In Case of Emergency</Text>
      </View>

      <ScrollView style={styles.strollContainer}>
        {/* Emergency Numbers Card */}
        <View style={styles.cardContainer}>
          <Button
            title="Emergency Numbers"
            onPress={() => toggleCard("numbers")}
            icon={
              openCards.numbers ? (
                <MaterialCommunityIcons name="chevron-up" style={styles.icon} />
              ) : (
                <MaterialCommunityIcons
                  name="chevron-down"
                  style={styles.icon}
                />
              )
            }
          />
          {openCards.numbers && (
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>
                Call these numbers immediately in case of a drug overdose or
                emergency situation.
              </Text>
              {emergencyNumbers.map((number) => (
                <View key={number.name} style={styles.numberItem}>
                  <MaterialCommunityIcons
                    name="phone"
                    style={styles.phoneIcon}
                  />
                  <Text style={styles.numberText}>
                    {number.name}: {number.number}
                  </Text>
                  <Button
                    title="Call Now"
                    onPress={() => handleCallPress(number.number)}
                    style={styles.callButton}
                  />
                </View>
              ))}
            </View>
          )}
        </View>

        {/* Overdose Prevention Card */}
        <View style={styles.cardContainer}>
          <Button
            title="Overdose Prevention & Steps"
            onPress={() => toggleCard("overdose")}
            icon={
              openCards.overdose ? (
                <MaterialCommunityIcons name="chevron-up" style={styles.icon} />
              ) : (
                <MaterialCommunityIcons
                  name="chevron-down"
                  style={styles.icon}
                />
              )
            }
          />
          {openCards.overdose && (
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>
                Learn how to recognize and prevent an overdose.
              </Text>
              <View style={styles.preventionItem}>
                <MaterialCommunityIcons
                  name="alert-circle"
                  style={styles.preventionIcon}
                />
                <Text style={styles.preventionText}>Signs of Overdose:</Text>
                <Text style={styles.preventionSubtext}>
                  - Drowsiness or confusion (not responding to stimuli)
                  {"\n"} - Slow, shallow, or irregular breathing
                  {"\n"} - Blueish or pale skin, lips, or fingernails
                  {"\n"} - Vomiting or gurgling sounds
                  {"\n"} - Seizures
                  {"\n"} - Loss of consciousness
                  {"\n"} - Coma
                  {"\n"} - Unusual behavior or agitation
                  {"\n"} - Constriction of the pupils
                </Text>
              </View>
              <View style={styles.preventionItem}>
                <MaterialCommunityIcons
                  name="shield-account"
                  style={styles.preventionIcon}
                />
                <Text style={styles.preventionText}>
                  How to Prevent Overdose:
                </Text>
                <Text style={styles.preventionSubtext}>
                  - Never take more than the prescribed dose of medication.
                  {"\n"} - Be aware of potential interactions between
                  medications and other substances (including alcohol).
                  {"\n"} - Measure doses carefully, using appropriate measuring
                  tools.
                  {"\n"} - Store medications safely and securely, out of the
                  reach of children and pets.
                  {"\n"} - Dispose of expired or unused medications properly.
                  {"\n"} - If you are concerned about your own or someone else's
                  drug use, seek help from a healthcare professional or
                  addiction treatment center.
                </Text>
              </View>
            </View>
          )}
        </View>

        {/* First Aid Information Card */}
        <View style={styles.cardContainer}>
          <Button
            title="First Aid Information"
            onPress={() => toggleCard("firstAid")}
            icon={
              openCards.firstAid ? (
                <MaterialCommunityIcons name="chevron-up" style={styles.icon} />
              ) : (
                <MaterialCommunityIcons
                  name="chevron-down"
                  style={styles.icon}
                />
              )
            }
          />
          {openCards.firstAid && (
            <View style={styles.cardContent}>
              <Text style={styles.importantText}>
                **Disclaimer:** This information is for educational purposes
                only and should not be a substitute for professional medical
                advice. Always call emergency services immediately in case of an
                overdose or life-threatening situation.{"\n"}
              </Text>
              <Text style={styles.cardText}>
                **If the person is unconscious and not breathing normally,
                perform CPR:**
              </Text>
              <Text style={styles.preventionSubtext}>
                1. Call emergency services immediately.
                {"\n"} 2. Place the person on their back on a firm, flat
                surface.
                {"\n"} 3. Open the airway by tilting the head back and lifting
                the chin.
                {"\n"} 4. Check for a pulse for no more than 10 seconds.
                {"\n"} 5. If there is no pulse, begin chest compressions. Push
                hard and fast in the center of the chest at a rate of at least
                100 compressions per minute.
                {"\n"} 6. If you are trained in giving rescue breaths, deliver
                two breaths after every 30 chest compressions.
                {"\n"} 7. Continue CPR until help arrives or the person starts
                breathing again.{"\n"}
              </Text>
              <Text style={styles.importantText}>
                **Learn CPR:** It's crucial to get proper CPR training to ensure
                you perform the steps correctly and effectively.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  emergencyContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#C6E7E5",
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
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  cardContainer: {
    marginBottom: 15,
    //borderRadius: 10,
  },
  cardText: {
    marginBottom: 10,
    fontSize: 17,
    fontWeight: "bold",
  },
  importantText: {
    fontStyle: "italic",
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
    fontSize: 20,
  },
  cardContent: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 1,
  },
  numberItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  phoneIcon: {
    fontSize: 20,
    marginRight: 10,
    color: "#007bff",
  },
  numberText: {
    flex: 1,
  },
  preventionItem: {
    marginBottom: 10,
  },
  preventionIcon: {
    fontSize: 30,
    marginRight: 10,
    color: "#f00",
  },
  preventionText: {
    fontWeight: "bold",
  },
  preventionSubtext: {
    fontSize: 14,
  },
  callButton: {
    marginLeft: "auto",
  },
});

export default Emergency;
