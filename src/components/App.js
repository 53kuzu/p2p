import React from 'react';

import VideoArea from './VideoArea';
import useRtcClient from './hooks/useRtcClient';
import InputForms from './inputForms';

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
  const rtcClient = useRtcClient();

  return (
  <>
    <InputForms rtcClient={rtcClient} />
    <VideoArea rtcClient = {rtcClient} />
  </>
  );
};

export default App;
