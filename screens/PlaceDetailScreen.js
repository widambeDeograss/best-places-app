import React,{useEffect, useState} from 'react';
import { Text } from 'react-native';
import { useGlobalContext } from '../context/context';

function PlaceDetailScreen(props) {
    const {places} = useGlobalContext();
     const [SelectedPlace, setSelectedPlace] = useState('');
    const placeId = props.route.params.placeId

    useEffect(() => {
      const placeSelect = places.find(place => placeId === place.id);
      setSelectedPlace(placeSelect);
      props.navigation.setOptions({title:placeSelect.title})
    }, [placeId])
  return (
    <Text>{SelectedPlace.title}</Text>
  )
}

export default PlaceDetailScreen