import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'

const HomePage = ({navigation}) => {
    const [id, setId] = useState('')
  return (
    <View style={{
        flex:1,
        backgroundColor:"blue",
    }}>
      <TextInput
      placeholder='Id'
      value={id}
      onChangeText={newValue=>setId(newValue)}
      style={{
        height:50,
        width:300,
        color:"black",
        fontWeight:'bold',
        borderWidth:1,
        borderColor:"green",
        backgroundColor:"white",
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        marginTop:50,
      }}
      />
      <TouchableOpacity style={{
        marginTop:50,
        height:50,
        width:300,
        backgroundColor:"green",
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
      }}
      onPress={()=>{
        navigation.navigate("ZeoClud",{
            userName:id
        })
      }}
      >
        <Text>JOIN BUTTON </Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({})