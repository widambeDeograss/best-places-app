import React from 'react'
import { Text, TouchableOpacity, View, Image, StyleSheet } from 'react-native'
import Colors from '../constants/Colors'

function PlaceItem(props) {
  return (
    <TouchableOpacity onPress={props.onSelect} style={styles.PlaceItem}>
   <Image style={styles.Image} source={
    {uri:"https://images.unsplash.com/photo-1565881606991-789a8dff9dbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJlc3QlMjBwbGFjZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"}
   }/>

   <View style={styles.infoContainer}>
     <Text style={styles.title}>{props.title}</Text>
    <Text style={styles.address}>{props.address}</Text>
   </View>
    </TouchableOpacity>
  )
}

const styles =  StyleSheet.create({
    PlaceItem:{
        borderBottomColor:Colors.psec,
        borderBottomWidth:1,
        paddingVertical:15,
        paddingHorizontal:30,
        flexDirection:'row',
        alignItems:'center'
    },
    Image:{
        width:90,
        height:70,
        borderRadius:35,
        borderColor:Colors.secondary,
        borderWidth:1

    },
    infoContainer:{
        marginLeft:25,
        width:250,
        justifyContent:'center',
        alignItems:'flex-start'

    },

    title:{
        color:'black',
        fontSize:18,
        marginBottom:5
    },
    address:{
        color:Colors.psec,
        fontSize:16
    }
})

export default PlaceItem