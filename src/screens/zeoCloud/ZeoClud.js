// App.js
import React, { Component } from 'react';
// import ZegoUIKitPrebuiltVideoConference from '@zegocloud/zego-uikit-prebuilt-video-conference-rn'
import { APP_ID, APP_SIGN } from '../../config';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {ZegoUIKitPrebuiltCall, ONE_ON_ONE_VIDEO_CALL_CONFIG ,GROUP_VIDEO_CALL_CONFIG} from '@zegocloud/zego-uikit-prebuilt-call-rn'

export default function ZeoClud({route}) {
   const navigation = useNavigation();
    const {userName} =  route.params;
    console.log("userNameuserName==>",userName);
   const randomUserId = String(Math.floor(Math.random()*100000))
    return (
        <View style={{
            flex:1,
        }}>
              <ZegoUIKitPrebuiltCall
                appID={APP_ID}
                appSign={APP_SIGN}
                userID={randomUserId} // userID can be something like a phone number or the user id on your own user system. 
                userName={`${userName}${randomUserId}`}
                callID={"zeoCloudOneOnOneVideoCall"} // callID can be any unique string. 

                config={{
                    // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
                    ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
                    onOnlySelfInRoom: () => { 
                        navigation.navigate('HomePage') 
                    },
                    onHangUp: () => {
                         navigation.navigate('HomePage')
                         },
                }}
            />
            {/* <ZegoUIKitPrebuiltVideoConference
                appID={APP_ID}
                appSign={APP_SIGN}
                userID={userName} // userID can be something like a phone number or the user id on your own user system. 
                userName={userName}
                conferenceID={"myCallId"} // conferenceID can be any unique string. 
                config={{
                    onLeave: () => { navigation.navigate('HomePage') },
                }}
            /> */}
        </View>
    );
}