import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import brainImage from "../images/Aerial_V2_960_e4f16d9ab2de9e07fc69b471b386ba4b.jpg";
import lungsImage from "../images/Aerial_V2_960_e4f16d9ab2de9e07fc69b471b386ba4b.jpg";
import liverImage from "../images/Aerial_V2_960_e4f16d9ab2de9e07fc69b471b386ba4b.jpg";

const InformationScreen_Effects = () => {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image
          source={require("../images/effects.png")} // Replace with your banner image
          style={styles.bannerImage}
        />
        <Text style={styles.appName}>Drug Abuse Effects</Text>
        <Text style={styles.bannerText}>Learn the Risks</Text>
      </View>

      <ScrollView style={styles.strollContainer}>
        <View style={styles.drugsInfo}>
          <Text style={styles.header}>How Drug Abuse Affects Your Body</Text>
          <Text style={styles.text}>
            Drugs can have a devastating impact on your physical and mental
            health. The effects vary depending on the specific drug, the amount
            used, and the frequency of use. However, some common consequences
            include:{"\n"}
          </Text>

          <Text style={styles.subHeader}>Addiction:</Text>
          <View style={styles.imageContainer}>
            <Image source={brainImage} style={styles.effectsImage} />
          </View>
          <Text style={styles.text}>
            Addiction is a complex brain condition that leads to compulsive drug
            seeking and use, despite harmful consequences. It changes the way
            the brain works and interferes with your ability to make healthy
            choices.{"\n"}
          </Text>

          <Text style={styles.subHeader}>Overdose and Death:</Text>
          <View style={styles.imageContainer}>
            <Image source={brainImage} style={styles.effectsImage} />
          </View>
          <Text style={styles.text}>
            Drug overdose is a serious medical emergency that can lead to death.
            It occurs when you take too much of a drug, and your body can't
            function properly. Even for first-time users, overdose is a risk,
            especially with certain drugs.{"\n"}
          </Text>

          <Text style={styles.subHeader}>Financial Problems:</Text>
          <View style={styles.imageContainer}>
            <Image source={brainImage} style={styles.effectsImage} />
          </View>
          <Text style={styles.text}>
            Drug addiction can be expensive. Drugs themselves can be costly, and
            the associated lifestyle can lead to financial problems. People with
            addiction may neglect work or school responsibilities, jeopardizing
            their income. They may also spend money on drug paraphernalia or
            engage in illegal activities to fund their habit.{"\n"}
          </Text>

          <Text style={styles.subHeader}>Mental Health:</Text>
          <View style={styles.imageContainer}>
            <Image source={brainImage} style={styles.effectsImage} />
          </View>
          <Text style={styles.text}>
            Drug abuse can have a significant impact on your mental health. In
            addition to addiction itself, it can contribute to conditions like
            anxiety, depression, paranoia, and hallucinations. Drugs can alter
            brain chemistry and disrupt neurotransmitters, leading to mental
            health problems.{"\n"}
          </Text>

          <Text style={styles.subHeader}>Sexual Dysfunction:</Text>
          <View style={styles.imageContainer}>
            <Image source={brainImage} style={styles.effectsImage} />
          </View>
          <Text style={styles.text}>
            Drug abuse can interfere with sexual function in both men and women.
            It can lead to problems with erectile dysfunction, decreased libido,
            and difficulty achieving orgasm. Drugs can affect hormone levels,
            blood flow, and the nervous system, all of which play a role in
            sexual function.{"\n"}
          </Text>

          <Text style={styles.subHeader}>Sleep Problems:</Text>
          <View style={styles.imageContainer}>
            <Image source={brainImage} style={styles.effectsImage} />
          </View>
          <Text style={styles.text}>
            Drug use can disrupt sleep patterns, causing insomnia or excessive
            sleepiness. Stimulants can make it difficult to fall asleep or stay
            asleep, while depressants can cause drowsiness. Disrupted sleep can
            impact your mood, energy levels, and overall health.{"\n"}
          </Text>

          <Text style={styles.subHeader}>Brain Damage:</Text>
          <View style={styles.imageContainer}>
            <Image source={brainImage} style={styles.effectsImage} />
          </View>
          <Text style={styles.text}>
            Many drugs can damage brain cells and alter brain function. This can
            lead to problems with memory, learning, decision-making, and
            coordination. In severe cases, it can also lead to mental health
            problems like psychosis or schizophrenia.{"\n"}
          </Text>

          <Text style={styles.subHeader}>Lung Damage:</Text>
          <View style={styles.imageContainer}>
            <Image source={lungsImage} style={styles.effectsImage} />
          </View>
          <Text style={styles.text}>
            Smoking or inhaling drugs can damage your lungs, making it harder to
            breathe. This can lead to respiratory problems like chronic
            obstructive pulmonary disease (COPD) and lung cancer.{"\n"}
          </Text>

          <Text style={styles.subHeader}>Liver Damage:</Text>
          <View style={styles.imageContainer}>
            <Image source={liverImage} style={styles.effectsImage} />
          </View>
          <Text style={styles.text}>
            {"\n"}
            The liver is responsible for filtering toxins from your blood. Heavy
            drug use can overwhelm the liver, leading to scarring and liver
            failure. This can be a life-threatening condition.{"\n"}
          </Text>

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
    fontSize: 40,
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
  subHeader: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    lineHeight: 23,
  },
  imageContainer: {
    width: "100%",
    //height: "40%",
    aspectRatio: 1,
    marginTop: "-10%",
    marginBottom: "-10%",
  },
  effectsImage: {
    width: "100%",
    height: "50%",
    flex: 1,
    resizeMode: "contain",
  },
});

export default InformationScreen_Effects;
