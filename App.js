import React,{useState} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,FlatList} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodos from './components/addTodos';
import About from './screens/about';
import Home from './screens/home';
import HomeStack from './routes/homeStack';

export default function App() {
  const [todo,setTodo]= useState([
    {text:'buy coffee',key:'1'},
    {text:'buy milk',key:'2'},
    {text:'buy almonds',key:'3'}
  ]);
  const handleClick=(key)=>
  {
    console.log('handleClick');
    setTodo((prevTodo)=>{
     return prevTodo.filter(item=>item.key!=key)
    });
  }
  const handleSubmit=(text) => 
    {
        setTodo
        (
            (prevTodo)=>
            {
                return [...prevTodo,{text:text,key:Math.random().toString()}];
            }
        );
    }
  return (
       <View style={styles.container}>
        <View>
          <Header/>
        </View>
        
        <HomeStack/>
        <FlatList data={todo}
        renderItem={({ item }) => (
          <TodoItem item={item}  handleClick={handleClick} />
        )}
        
        />
        <AddTodos handleSubmit={handleSubmit}/>

       </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:60,
  },
  tcontent: 
  {
    fontSize:20,
    backgroundColor: '#094CA3',
    marginTop:5,
    padding:5,
  },
  content: 
  {
    
  },
});
