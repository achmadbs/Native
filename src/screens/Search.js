import React, { useState } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import ResultList from "../components/ResultList";
import useFetch from "../hooks/useFetch";

function Search() {
  const [searchVal, setSearchVal] = useState("");
  const [handleSearchResult, results, errorMessage] = useFetch();

  const handleFilterByPrice = (price) => {
    const res = results.filter((results) => results.price === price);
    return res.length < 1 ? "not found" : res;
  };

  return (
    <>
      <SearchBar
        value={searchVal}
        onChangeVal={(e) => setSearchVal(e)}
        deleteValue={() => setSearchVal("")}
        onSubmit={() => handleSearchResult(searchVal)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultList
          results={handleFilterByPrice("$")}
          tittle={"Cost Effective"}
        />
        <ResultList
          results={handleFilterByPrice("$$")}
          tittle={"Bit Pricier"}
        />
        <ResultList
          results={handleFilterByPrice("$$$")}
          tittle={"Big Spender"}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    marginLeft: 15,
  },
});

export default Search;
