"use client"

import React, {useEffect, useState} from 'react'
import { useCall, VideoPreview } from '@stream-io/video-react-sdk'

const MeetingSetup = () => {
  const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false)

  const call = useCall();

  if(!call) {
    throw new Error("Call not found");
  }
 
  useEffect(() => {
    if (isMicCamToggledOn) {
      call?.camera?.disable();
      call?.microphone?.disable();
    } else {
      call?.camera?.enable();
      call?.microphone?.enable();
    }
  }, [isMicCamToggledOn, call?.camera, call?.microphone])


  return (
    <div className='h-screen w-full flex flex-col items-center justify-center gap-3 text-white'>
      <h1 className='text-2xl font-bold'>Setup</h1>
      <VideoPreview/>
      
    </div>
  )
}

export default MeetingSetup