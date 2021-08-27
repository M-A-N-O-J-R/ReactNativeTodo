import React,{useState} from 'react';
import { StyleSheet, Text, View ,TextInput,Button} from 'react-native';

export default function addTodos({handleSubmit})
{
    const [text,setText]=useState('');
    const handleChange=(value) => 
    {
        setText(value);
    }
    
    return(
        <View style={styles.container}>
            <TextInput 
                placeholder="enter the text"
                onChangeText={handleChange}
            />
            <Button title="ADD" onPress={()=>handleSubmit(text)}/>
        </View>
    )
}
const styles = StyleSheet.create(
{
    container: 
    {
        flexDirection:'row',

       alignItems:'center',
        justifyContent:'space-evenly',
    }
})