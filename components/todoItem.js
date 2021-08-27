import React,{useState} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default function TodoItem({item,handleClick})
{
  
  return(
    
        <TouchableOpacity style={styles.container} >
            <Text style={styles.tcontent} >{item.text}</Text>
            <AntDesign name="delete" size={25} color="black" onPress={() => handleClick(item.key)}/>   
        </TouchableOpacity>  
    
  )  
  
}
const styles = StyleSheet.create({
  tcontent: 
  {
    fontSize:20,
    
    marginTop:5,
    padding:10,
  },
  container: 
  {
    backgroundColor: 'pink',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth:1,
  }
})