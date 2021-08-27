import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header()
{
    return(
        <View style={styles.header}>
            <Text style={styles.content}>LIST</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header: 
    {
        height:40,
        //width:100,
        backgroundColor:'#34A952',

    },
    content: 
    {
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        padding:5,
    }
});