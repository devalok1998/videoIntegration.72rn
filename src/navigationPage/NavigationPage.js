import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ZeoClud from '../screens/zeoCloud/ZeoClud';
import HomePage from '../screens/HomePage';
// import AgoraUiKitNew from '../screens/agoraVideoCall/AgoraUiKitNew';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const NavigationPage = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='HomePage'>
          {/* <Stack.Screen name='AgoraUiKitNew' component={AgoraUiKitNew}/> */}
            <Stack.Screen name="ZeoClud" component={ZeoClud}/>
            <Stack.Screen name="HomePage" component={HomePage}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationPage

const styles = StyleSheet.create({})