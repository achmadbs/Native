import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useFetch from "../hooks/useFetch";

function Search() {
  const [searchVal, setSearchVal] = useState("");
  const [handleSearchResult, results, errorMessage] = useFetch();

  return (
    <View>
      <SearchBar
        value={searchVal}
        onChangeVal={(e) => setSearchVal(e)}
        deleteValue={() => setSearchVal("")}
        onSubmit={() => handleSearchResult(searchVal)}
      />
      <Text>Hallo we found {results.length} result</Text>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
    </View>
  );
}

const style = StyleSheet.create({});

export default Search;
