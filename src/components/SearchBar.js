import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

function SearchBar({ value, onChangeVal, deleteValue, onSubmit }) {
  const renderSearchIcon = () => (
    <Feather
      name="search"
      size={24}
      color="black"
      style={style.iconStyle}
      onPress={onSubmit}
    />
  );

  const renderInputText = () => {
    return (
      <TextInput
        autoCorrect={false}
        onChangeText={onChangeVal}
        placeholder="Search"
        style={style.inputStyle}
        value={value}
      />
    );
  };

  const renderDeleteIcon = () => {
    const show = value.length > 0;
    return (
      show && (
        <Feather
          name="x-circle"
          size={20}
          color="black"
          style={style.circleStyle}
          onPress={deleteValue}
        />
      )
    );
  };

  return (
    <View style={style.background}>
      {renderSearchIcon()}
      {renderInputText()}
      {renderDeleteIcon()}
    </View>
  );
}

const style = StyleSheet.create({
  background: {
    backgroundColor: "#e0dcdc",
    height: 50,
    marginTop: 16,
    marginBottom: 10,
    marginHorizontal: 15,
    borderRadius: 5,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
  },
  iconStyle: {
    alignSelf: "center",
    marginHorizontal: 12,
  },
  circleStyle: {
    opacity: 0.6,
    alignSelf: "center",
    marginRight: 8,
  },
});

export default SearchBar;
