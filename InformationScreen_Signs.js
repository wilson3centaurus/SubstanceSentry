import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const InformationScreen_Signs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image
          source={require("./images/signs.png")}
          style={styles.bannerImage}
        />
        <Text style={styles.appName}>Drug Abuse Signs</Text>
        <Text style={styles.bannerText}>Spot the Warning Signals</Text>
      </View>

      <ScrollView style={styles.strollContainer}>
        <View style={styles.signsInfo}>
          <Text style={styles.header}>Warning Signs of Drug Abuse{"\n"}</Text>
          <Text style={styles.text}>
            Drug abuse can be difficult to detect, but there are often warning
            signs. These signs may vary depending on the specific drug and the
            severity of the addiction. {"\n"}
            {"\n"}Here are 10 common signs to look for:
          </Text>

          <View style={styles.signItem}>
            <MaterialCommunityIcons
              name="sentiment-down"
              size={30}
              color="#F1C40F"
            />
            <Text style={styles.signText}>Depression</Text>
            <View style={styles.signDescriptionContainer}>
              <Text style={styles.signDescription}>
                Drug abuse can contribute to feelings of hopelessness, sadness,
                and loss of interest in activities, which are symptoms of
                depression.{"\n"}
              </Text>
            </View>
          </View>

          <View style={styles.signItem}>
            <MaterialCommunityIcons name="scale" size={30} color="#F1C40F" />
            <Text style={styles.signText}>Rapid Weight Loss or Gain</Text>
            <View style={styles.signDescriptionContainer}>
              <Text style={styles.signDescription}>
                Changes in appetite due to drug use can lead to significant
                weight fluctuations.{"\n"}
              </Text>
            </View>
          </View>

          <View style={styles.signItem}>
            <MaterialCommunityIcons name="needle" size={30} color="#FF9900" />
            <Text style={styles.signText}>Changes in Possessions</Text>
            <Text style={styles.signDescription}>
              Missing money, valuables, or drug paraphernalia (pipes, rolling
              papers, etc.) could indicate drug use.{"\n"}
            </Text>
          </View>

          <View style={styles.signItem}>
            <MaterialCommunityIcons name="eye" size={30} color="#9C27B0" />
            <Text style={styles.signText}>Changes in Appearance</Text>
            <Text style={styles.signDescription}>
              Bloodshot eyes, weight loss/gain, unkempt appearance, or changes
              in hygiene habits can be signs of drug abuse.{"\n"}
            </Text>
          </View>

          <View style={styles.signItem}>
            <MaterialCommunityIcons name="sleep" size={30} color="#2ECC71" />
            <Text style={styles.signText}>Changes in Sleep Patterns</Text>
            <Text style={styles.signDescription}>
              Excessive sleepiness, difficulty falling asleep, or unusual sleep
              schedules can be linked to drug use.{"\n"}
            </Text>
          </View>

          <View style={styles.signItem}>
            <MaterialCommunityIcons
              name="account-alert"
              size={30}
              color="#F1C40F"
            />
            <Text style={styles.signText}>Mood Swings and Irritability</Text>
            <Text style={styles.signDescription}>
              Sudden mood swings, outbursts of anger, or increased irritability
              can be signs of drug use or withdrawal.{"\n"}
            </Text>
          </View>

          <View style={styles.signItem}>
            <MaterialCommunityIcons name="school" size={30} color="#3498DB" />
            <Text style={styles.signText}>
              Changes in School or Work Performance
            </Text>
            <Text style={styles.signDescription}>
              Declining grades, absenteeism, or problems at work can be
              indicators of drug abuse affecting focus and responsibility.{"\n"}
            </Text>
          </View>

          <View style={styles.signItem}>
            <MaterialCommunityIcons
              name="silverware-fork-knife"
              size={30}
              color="#FF9900"
            />
            <Text style={styles.signText}>Changes in Appetite</Text>
            <View style={styles.signDescriptionContainer}>
              <Text style={styles.signDescription}>
                Significant changes in appetite, either loss or gain, can be a
                sign of drug use.{"\n"}
              </Text>
            </View>
          </View>

          <View style={styles.signItem}>
            <MaterialCommunityIcons name="lock" size={30} color="#9C27B0" />
            <Text style={styles.signText}>Secrecy and Deception</Text>
            <View style={styles.signDescriptionContainer}>
              <Text style={styles.signDescription}>
                The person may become secretive about their whereabouts,
                possessions, or finances to hide drug use.{"\n"}
              </Text>
            </View>
          </View>

          <View style={styles.signItem}>
            <MaterialCommunityIcons
              name="account-outline"
              size={30}
              color="#2ECC71"
            />
            <Text style={styles.signText}>Social Withdrawal</Text>
            <View style={styles.signDescriptionContainer}>
              <Text style={styles.signDescription}>
                Isolation from friends, family, and activities they used to
                enjoy can be a sign.{"\n"}
              </Text>
            </View>
          </View>

          <View style={styles.signItem}>
            <MaterialCommunityIcons name="run" size={30} color="#3498DB" />
            <Text style={styles.signText}>Poor Coordination</Text>
            <View style={styles.signDescriptionContainer}>
              <Text style={styles.signDescription}>
                Drugs can impair motor skills and reaction time, leading to
                clumsiness or stumbling.{"\n"}
              </Text>
            </View>
          </View>

          <Text style={styles.header}>Get Help If You Need It</Text>
          <Text style={styles.text}>
            If you or someone you know is struggling with drug abuse, there is
            help available. Please reach out to a professional for support and
            treatment options or Please refer to the "Support & Treatment"
            section of the app for more information.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
  },
  strollContainer: {
    flex: 1,
  },
  banner: {
    position: "relative",
    height: "25%",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
  },
  appName: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    position: "absolute",
    top: "50%",
    left: "4%",
  },
  bannerText: {
    fontSize: 18,
    color: "#fff",
    position: "absolute",
    top: "74%",
    left: "4%",
  },
  signsInfo: {
    flex: 1,
    padding: 20,
    backgroundColor: "#CEE5E7",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 15,
    textAlign: "justify",
  },
  signItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  signText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  signDescription: {
    fontSize: 16,
    lineHeight: 22,
    marginLeft: 30,
    textAlign: "left",
  },
});

export default InformationScreen_Signs;
