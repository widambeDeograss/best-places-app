import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useGlobalContext } from '../context/context';
import PlaceItem from '../components/PlaceItem';

const PlacesListScreen = () => { 
  const { places } = useGlobalContext()
  console.log(places);

  return (
    <View>
    <FlatList data={places} keyExtractor={item => item.id} renderItem={itemData => <PlaceItem title={itemData.item.title} onSelect={()=>{}}/>}/>
    </View>
  )
}

export default PlacesListScreen