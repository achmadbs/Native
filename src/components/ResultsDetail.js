import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ResultsDetail({ results }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: results.image_url }} />
      <Text style={styles.name}>{results.name}</Text>
      <Text>
        {results.rating} Stars, {results.review_count} Reviews
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
    flexWrap: "wrap",
  },
});
