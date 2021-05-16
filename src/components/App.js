import React, { useState } from 'react';

import InputFormLocal from './InputFormLocal'
import InputFormRemote from './InputFormRemote'
import VideoArea from './VideoArea';

const getMedia = async () => {
  const constraints  = { audio: true, video: true }

  try {
    return await navigator.mediaDevices.getUserMedia(constraints);
    /* ストリームを使用 */
  } catch(err) {
    /* エラーを処理 */
    console.error(err);
  }
};

getMedia();

const App = () => {
  const [localPeerName, setLocalPeerName] = useState('');
  const [remotePeerName, setRemotePeerName] = useState('');
  console.log({localPeerName,remotePeerName})

  return (
  <>
    <InputFormLocal
      localPeerName = {localPeerName}
      setLocalPeerName = {setLocalPeerName}
    />
    <InputFormRemote
      localPeerName = {localPeerName}
      remotePeerName = {remotePeerName}
      setRemotePeerName = {setRemotePeerName}
    />
    <VideoArea 
      localPeerName = {localPeerName}
      remotePeerName = {remotePeerName}
    />
  </>
  );
};

export default App;
