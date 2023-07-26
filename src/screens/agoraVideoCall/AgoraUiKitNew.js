// import React, {useState} from 'react';
// import AgoraUIKit from 'agora-rn-uikit';

// const AgoraUiKitNew = () => {
//   const [videoCall, setVideoCall] = useState(true);
//   const connectionData = {
//     AgoraUiKitNewId: '2a37de018ef746b88d689e73cd051462',
//     channel: 'test',
//   };
//   const rtcCallbacks = {
//     EndCall: () => setVideoCall(false),
//   };
//   return videoCall ? (
//     <AgoraUIKit connectionData={connectionData} rtcCallbacks={rtcCallbacks} />
//   ) : (
//     <Text onPress={()=>setVideoCall(true)}>Start Call</Text>
//   );
// };

// export default AgoraUiKitNew;

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AgoraUiKitNew = () => {
  return (
    <View>
      <Text>AgoraUiKitNew</Text>
    </View>
  )
}

export default AgoraUiKitNew

const styles = StyleSheet.create({})