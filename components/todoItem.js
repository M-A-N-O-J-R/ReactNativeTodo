import React,{useState} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';



export default function TodoItem({item,handleClick})
{
  
  return(
    
        <TouchableOpacity onPress={() => handleClick(item.key)}>
            <Text style={styles.tcontent} >{item.text}</Text>
        </TouchableOpacity>  
    
  )  
  
}
const styles = StyleSheet.create({
  tcontent: 
  {
    fontSize:20,
    backgroundColor: '#094CA3',
    marginTop:5,
    padding:10,
  }
})