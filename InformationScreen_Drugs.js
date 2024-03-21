import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const InformationScreen_Drugs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image
          source={require("./images/drugs.png")}
          style={styles.bannerImage}
        />
        <Text style={styles.appName}>Drug and Substance abuse</Text>
        <Text style={styles.bannerText}>Get Information</Text>
      </View>

      <ScrollView style={styles.strollContainer}>
        <View style={styles.drugsInfo}>
          <Text style={styles.header}>
            {"\n"}What are Drugs and Substances?
          </Text>
          <Text style={styles.text}>
            Drugs are substances that alter how your body functions. They can be
            legal (like tobacco or alcohol) or illegal (like cocaine or heroin).
            Substances can also be misused, which means using a legal product in
            a harmful way (like abusing prescription medications).{"\n"}
            {"\n"}
          </Text>

          <Text style={styles.header}>
            Different Categories of Drugs and Substances:{"\n"}
          </Text>

          {/* Drug Categories */}
          <Text style={styles.category}>1. Depressants:</Text>
          <Text style={styles.text}>
            Slow down the central nervous system, leading to feelings of
            relaxation and calmness. Can be dangerous in high doses or when
            mixed with other substances.
          </Text>
          <Text style={styles.subText}>
            <Text style={{ fontWeight: "bold" }}>* Examples:</Text> Alcohol,
            barbiturates, benzodiazepines{"\n"}
          </Text>

          <Text style={styles.category}>2. Stimulants:</Text>
          <Text style={styles.text}>
            Increase alertness and activity. Can cause heart problems, anxiety,
            and insomnia.
          </Text>
          <Text style={styles.subText}>
            <Text style={{ fontWeight: "bold" }}>* Examples:</Text> Cocaine,
            methamphetamine, amphetamines, caffeine (in high doses){"\n"}
          </Text>

          <Text style={styles.category}>3. Hallucinogens:</Text>
          <Text style={styles.text}>
            Alter your perception of reality, causing you to see, hear, or feel
            things that aren't there. Can lead to unpredictable and dangerous
            behavior.
          </Text>
          <Text style={styles.subText}>
            <Text style={{ fontWeight: "bold" }}>* Examples:</Text> LSD,
            psilocybin (mushrooms), PCP, ketamine{"\n"}
          </Text>

          <Text style={styles.category}>4. Opioids:</Text>
          <Text style={styles.text}>
            Powerful pain relievers that can also produce feelings of euphoria.
            Highly addictive and can lead to overdose and death.
          </Text>
          <Text style={styles.subText}>
            <Text style={{ fontWeight: "bold" }}>* Examples:</Text> Heroin,
            oxycodone, hydrocodone, fentanyl, prescription pain medications
            {"\n"}
          </Text>

          <Text style={styles.category}>5. Cannabinoids:</Text>
          <Text style={styles.text}>
            Act on the brain's cannabinoid receptors, producing psychoactive
            effects like relaxation and altered perception. Can be legal
            (medical marijuana) or illegal (street marijuana).
          </Text>
          <Text style={styles.subText}>
            <Text style={{ fontWeight: "bold" }}>* Examples:</Text> THC
            (tetrahydrocannabinol), CBD (cannabidiol){"\n"}
          </Text>

          <Text style={styles.header}>
            Additional Information on Drug and Substance Abuse:
          </Text>
          <Text style={styles.text}>
            * Drug abuse can have serious consequences for your physical and
            mental health, relationships, and finances. * Addiction is a chronic
            disease that can be difficult to overcome. Treatment options are
            available, but seeking help is crucial. {"\n"}
            {"\n"}* If you or someone you know is struggling with drug or
            substance abuse, there are resources available to help on our
            "Resources" Section or Please refer to the "Support & Treatment"
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
    //marginBottom: 200,
  },
  banner: {
    position: "relative",
    height: "23%",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
  },
  appName: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
    position: "absolute",
    bottom: 50,
    left: 3,
    right: 0,
    marginLeft: 10,
  },
  bannerText: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    color: "#fff",
    fontSize: 17,
    marginLeft: 10,
  },
  cardsContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    maxWidth: "100%",
    height: "100%",
    gap: 9,
    overflow: "scroll",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 2,
    borderRadius: 7,
    width: "95%",
    height: "20%",
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: "pink",
  },
  cardIcon: {
    width: 50,
    height: 50,
  },
  cardText: {
    fontSize: 17,
    marginLeft: 20,
    textAlign: "center",
  },
  drugsInfo: {
    flex: 1,
    padding: 20,
    backgroundColor: "#CEE5E7",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  category: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    lineHeight: 23,
  },
  subText: {
    fontSize: 14,
  },
});

export default InformationScreen_Drugs;
