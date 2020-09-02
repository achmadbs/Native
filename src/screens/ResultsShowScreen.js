import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/api";

export default function ResultsShowScreen({ navigation }) {
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);
  const id = navigation.getParam("id");

  useEffect(() => {
    const handleSingleFetch = async (id) => {
      setLoading(true);
      const res = await yelp.get(`/${id}`);
      setLoading(false);
      setResult(res.data);
    };
    handleSingleFetch(id);
  }, []);

  const renderContent = () => {
    return (
      <>
        <Text>{result.name}</Text>
        <FlatList
          data={result.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => {
            return <Image style={style.image} source={{ uri: item }} />;
          }}
        />
      </>
    );
  };

  return <View>{loading ? <Text>Loading</Text> : renderContent()}</View>;
}

const style = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});
