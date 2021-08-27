import React,{useState} from 'react';
import { StyleSheet, Text, View ,TextInput,Button} from 'react-native';

export default function Home({navigation})
{
    return(
        <View>
            <Text>Home</Text>
            <Button title="about" onPress={()=>navigation.navigate('About')}/>
        </View>
    );
}