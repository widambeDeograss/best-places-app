import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import PlacesListScreen from "../screens/PlacesListScreen";
import NewPlacesScreen from '../screens/NewPlacesScreen';
import { Button, Platform } from 'react-native';
import Colors from '../constants/Colors';

const Stack = createStackNavigator()



function PlacesNavigator() {
  return (
    <Stack.Navigator
    screenOptions={{
        headerStyle:{
            backgroundColor:Platform.OS === 'android'? Colors.primary :''    

         },
         headerTintColor:Platform.OS === 'android'? 'white': Colors.primary
    }}
    >
       
        <Stack.Screen name="places" component={PlacesListScreen} 
        options={({ navigation, route }) => ({
          headerTitle:'Best Places',
          // Add a placeholder button without the `onPress` to avoid flicker
          headerRight: () => (
            <Button title="Update count" onPress={() => {navigation.navigate('newPlaces')}}/>
          ),
        })}
        />
           <Stack.Screen name='newPlaces'  component={NewPlacesScreen} 
        options={
            {headerTitle:'Add Place'}
        }
        />
      
    </Stack.Navigator>
    )
}

export default PlacesNavigator