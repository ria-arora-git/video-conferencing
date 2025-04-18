"use client"

import React, {useEffect, useState} from 'react'
import { DeviceSettings, useCall, VideoPreview } from '@stream-io/video-react-sdk'
import { Button } from './ui/button'


const MeetingSetup = ({setIsSetupComplete} : {setIsSetupComplete: (value: boolean) => void}) => {
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
      <div className='flex h-16 items-center justify-center gap-3'>
        <label className='flex items-center justify-center gap-2 font-medium'>
          <input 
            type="checkbox" 
            className='h-5 w-5 cursor-pointer rounded-lg border-2 border-white bg-transparent text-white'
            checked={isMicCamToggledOn}
            onChange={(e) => setIsMicCamToggledOn(e.target.checked)}
          />
          Disable Camera and Microphone
        </label>
        <DeviceSettings/>
      </div>
      <Button className='rounded-md bg-green-500 px-4 py-2.5' onClick={() => {
        call.join();
        setIsSetupComplete(true);
      }}>
        Join Meeting
      </Button>
    </div>
  )
}

export default MeetingSetup