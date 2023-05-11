import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useGlobalContext } from "../context/context";
import PlaceItem from "../components/PlaceItem";

const PlacesListScreen = (props) => {
  const { places } = useGlobalContext();
  console.log(places);

  return (
    <View>
      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <PlaceItem title={itemData.item.title}
          onSelect={() => {
            props.navigation.navigate({name:'placeDetail', params:{placeId: itemData.item.id}})
          }} />
        )}
      />
    </View>
  );
};

export default PlacesListScreen;
