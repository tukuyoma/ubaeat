import React from "react";
import { View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar({
  setLocation,
}: {
  setLocation: (location: string) => void;
}) {
  return (
    <View
      style={{
        backgroundColor: "#eee",
        flexDirection: "row",
        marginTop: 15,
        borderRadius: 30,
        alignItems: "center",
      }}
    >
      <GooglePlacesAutocomplete
        placeholder="Search"
        query={{
          key: "AIzaSyAcn4Ai0E1TXzv181YD_3LUZqncaGIWBoY",
          language: "en",
          types: "geocode",
        }}
        onPress={(res) => {
          setLocation(res.description.split(",")[0]);
        }}
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              marginRight: 8,
              backgroundColor: "white",
              padding: 9,
              borderRadius: 30,
              alignItems: "center",
            }}
          >
            <AntDesign
              style={{ marginRight: 6 }}
              name="clockcircle"
              size={11}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}
