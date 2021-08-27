import React,{useState} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default function TodoItem({item,handleClick})
{
  
  return(
    
        <TouchableOpacity style={styles.container} >
            <Text style={styles.tcontent} >{item.text}</Text>
            <View style={styles.btnContainer}>

              <AntDesign name="delete" size={25} color="black" onPress={() => handleClick(item.key)}/>   
            </View>
           
        </TouchableOpacity>  
    
  )  
  
}
const styles = StyleSheet.create({
  tcontent: 
  {
    fontSize:20,
    
    marginTop:5,
    padding:10,
    textAlign:'center',
    width:'50%',
    height:'100%',
    borderLeftWidth:2,
  },
  container: 
  {
    backgroundColor: 'pink',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth:1,
    width:'100%',
  },
  btnContainer:
  {
   
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'center',
    height:'100%',
    alignItems: 'center',
    borderLeftWidth:2,

  }
})