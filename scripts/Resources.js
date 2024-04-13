import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"; // Import icons
import { Image } from "react-native";
import { WebView } from "react-native-webview";
import { Linking } from "react-native"; // Import Linking for opening external URLs

const Resources = () => {
  const resources = [
    {
      title: "Articles and Information",
      content: [
        {
          title: "Understanding Drug Abuse",
          link: "https://www.drugabuse.gov/publications/drugfacts/understanding-drug-abuse",
          icon: "book-open-outline",
        },
        {
          title: "The Dangers of Addiction",
          link: "https://www.mayoclinic.org/diseases-conditions/drug-addiction/symptoms-causes/syc-20351102",
          icon: "alert-circle",
        },
        {
          title: "Recovery Resources for You and Your Loved Ones",
          link: "https://www.niaaa.nih.gov/alcohol-health/recovery",
          icon: "heart-outline",
        },
        {
          title: "Types of Drugs (National Institute on Drug Abuse)",
          link: "https://www.drugabuse.gov/publications/drugfacts/types-of-drugs",
          icon: "book-open-outline",
        },
        {
          title:
            "How Drug Abuse Affects the Brain (National Institute on Drug Abuse)",
          link: "https://www.drugabuse.gov/publications/drugfacts/how-drug-abuse-affects-brain",
          icon: "book-open-outline",
        },
        {
          title:
            "Helping Someone You Care About (National Institute on Drug Abuse)",
          link: "https://www.drugabuse.gov/publications/drugfacts/helping-someone-you-care-about",
          icon: "book-open-outline",
        },
        {
          title:
            "Understanding Alcohol Use Disorders (National Institute on Alcohol Abuse and Alcoholism)",
          link: "https://www.niaaa.nih.gov/alcohol-health/understanding-alcohol-use-disorders",
          icon: "book-open-outline",
        },
        {
          title:
            "Alcohol Treatment and Recovery (National Institute on Alcohol Abuse and Alcoholism)",
          link: "https://www.niaaa.nih.gov/alcohol-health/alcohol-treatment-and-recovery",
          icon: "book-open-outline",
        },
        {
          title:
            "Alcohol and Your Health (National Institute on Alcohol Abuse and Alcoholism)",
          link: "https://www.niaaa.nih.gov/alcohol-health/alcohol-your-health",
          icon: "book-open-outline",
        },
        {
          title:
            "Principles of Drug Abuse Treatment for Adults (Substance Abuse and Mental Health Services Administration)",
          link: "https://www.samhsa.gov/publications/principles-drug-abuse-treatment-adults-treatment-improvement-protocol-tip-43",
          icon: "book-open-outline",
        },
        {
          title:
            "Buprenorphine: A Medication-Assisted Treatment for Opioid Dependence (Substance Abuse and Mental Health Services Administration)",
          link: "https://www.samhsa.gov/publications/buprenorphine-medication-assisted-treatment-opioid-dependence-tip-40",
          icon: "book-open-outline",
        },
        {
          title: "Teen Drug Abuse (Mayo Clinic)",
          link: "https://www.mayoclinic.org/diseases-conditions/teen-drug-abuse/symptoms-causes/syc-20352048",
          icon: "book-open-outline",
        },
        {
          title:
            "Drug Abuse Treatment: Coping Skills and Support (Mayo Clinic)",
          link: "https://www.mayoclinic.org/diseases-conditions/drug-addiction/in-depth/drug-abuse-treatment/art-20045443",
          icon: "book-open-outline",
        },
        {
          title: "Drug Withdrawal: Symptoms and Treatment (Mayo Clinic)",
          link: "https://www.mayoclinic.org/diseases-conditions/drug-withdrawal/symptoms-causes/syc-20354095",
          icon: "book-open-outline",
        },
      ],
    },
    {
      title: "Videos and Podcasts",
      content: [
        {
          title: "TED Talk: How to Overcome Addiction (Johann Hari)",
          link: "https://www.youtube.com/watch?v=6tD9z_LEs7s",
          icon: "youtube",
        },
        {
          title: "The Recovery Elevator Podcast",
          link: "https://www.recoveryelevator.com/",
          icon: "headphones",
        },
        {
          title:
            "Stories of Hope and Recovery (National Institute on Drug Abuse)",
          link: "https://www.drugabuse.gov/publications/drugfacts/stories-hope-recovery",
          icon: "account-multiple",
        },
        {
          title: "The Addicted Mind Podcast",
          link: "https://www.theadictedmind.com/",
          icon: "headphones",
        },
        {
          title: "SMART Recovery: Free Addiction Recovery Support Groups",
          link: "https://www.smartrecovery.org/",
          icon: "account-multiple",
        },
        {
          title:
            "National Institute on Alcohol Abuse and Alcoholism Alcohol Treatment Podcast",
          link: "https://www.niaaa.nih.gov/alcohol-health/podcast",
          icon: "headphones",
        },
        {
          title: "Alcoholics Anonymous",
          link: "https://www.aa.org/",
          icon: "account-multiple",
        },
        {
          title: "Narcotics Anonymous",
          link: "https://www.na.org/",
          icon: "account-multiple",
        },
        {
          title:
            "The Duncan Trussell Family Hour Podcast (Addiction & Mental Health Discussions)",
          link: "https://www.duncantrussell.com/",
          icon: "headphones",
        },
        {
          title:
            "Recovery Dharma: Free Addiction Recovery Support Groups Based on Buddhist Principles",
          link: "https://www.recoverydharma.org/",
          icon: "account-multiple",
        },
        {
          title: "The Happiness Lab Podcast (Episode: Addiction)",
          link: "https://www.happinesslab.fm/addiction/",
          icon: "headphones",
        },
        {
          title: "Dr. Drew Podcast (Episodes on Addiction)",
          link: "https://www.drdrew.com/podcasts/",
          icon: "headphones",
        },
        {
          title: "The MENTAL Podcast (Episodes on Addiction & Mental Health)",
          link: "https://www.thementalpodcast.com/",
          icon: "headphones",
        },
        {
          title: "VeraLife: In the Rooms (Addiction Recovery Stories)",
          link: "https://www.veralife.com/in-the-rooms/",
          icon: "headphones",
        },
        {
          title:
            "Sam Harris Waking Up Podcast (Episodes on Addiction & The Mind)",
          link: "https://www.samharris.org/podcasts/",
          icon: "headphones",
        },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image
          source={require("../images/ghuj.jpg")}
          style={styles.bannerImage}
        />
        <Text style={styles.appName}>Resources</Text>
        <Text style={styles.bannerText}>Your Path to Wellness Starts Now</Text>
      </View>
      <ScrollView style={styles.scrollContent}>
        {resources.map((category) => (
          <View key={category.title} style={styles.category}>
            <Text style={styles.categoryTitle}>{category.title}</Text>

            {category.content.map((resource) => (
              <TouchableOpacity
                key={resource.title}
                style={styles.resourceItem}
                onPress={() =>
                  resource.link ? Linking.openURL(resource.link) : null
                }
              >
                <MaterialCommunityIcons
                  name={resource.icon}
                  size={24}
                  color="#007bff"
                  style={styles.resourceIcon}
                />
                <Text style={styles.resourceTitle}>{resource.title}</Text>
                {resource.link && (
                  <MaterialCommunityIcons
                    name="link"
                    size={18}
                    color="#007bff"
                    style={styles.linkIcon}
                  />
                )}
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CEE5E7",
  },
  scrollContent: {
    flex: 1,
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
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
    position: "absolute",
    bottom: 40,
    left: 3,
    marginLeft: 10,
  },
  bannerText: {
    position: "absolute",
    bottom: 20,
    left: 0,
    color: "#CEE5E7",
    fontSize: 19,
    marginLeft: 10,
  },
  category: {
    marginTop: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingBottom: 10,
    marginLeft: 10,
  },
  categoryTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  resourceItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  resourceIcon: {
    marginRight: 10,
  },
  resourceTitle: {
    flex: 1,
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 5,
  },
  linkIcon: {
    padding: 5,
  },
});

export default Resources;
