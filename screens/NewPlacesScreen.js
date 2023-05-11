import React,{useState, useCallback} from 'react'
import { Text, StyleSheet, View,ScrollView, TextInput, Button } from 'react-native'
import Colors from '../constants/Colors';
import { useGlobalContext } from '../context/context';

function NewPlacesScreen(props) {
    const [titleValue, setTitleValue] = useState('');
    const {dispatch}= useGlobalContext();
    const [selectedImage, setselectedImage] = useState();
    const [selectedLocation, setselectedLocation] = useState();

    const titleChange =(text) => {
        setTitleValue(text)
    }
    const imageTakenHandler = imagePath => {
        setselectedImage(imagePath);
    }
    const locationPicker = useCallback(location => {
        setselectedLocation(location);
    }, [])

    const savePlaceHandler = () => {
      dispatch({
        type:'ADD_PLACE',
        payload:{
          title:titleValue
        }
      })
      props.navigation.navigate('places')
    }

  return (
    <ScrollView>
     <View style={styles.container}>
        <Text style={styles.label}>Place Name</Text>
        <TextInput
        style={styles.input}
        onChangeText={titleChange}
        value={titleValue}
        placeholder="place name"
      />
        <Button
        title="Save Place"
        style={styles.savebtn}
        color= {Colors.accent}
        onPress={savePlaceHandler}
        />
        
     </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({

    container:{
        margin:30,
        elevation:3
    },
    label:{
        fontSize:18,
        marginBottom:15,
        fontWeight:'bold'
    },
    savebtn:{
      borderRadius:20
    },
    input:{
        borderColor:Colors.psec,
        borderWidth:1,
        marginBottom:15,
        paddingVertical:4,
        paddingHorizontal:2

    }
})

export default NewPlacesScreen