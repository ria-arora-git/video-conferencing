"use client"

import { useState } from 'react'
import HomeCard from './HomeCard'
import MeetingModal from './MeetingModal'
import { toast } from "sonner"
import { useRouter } from 'next/navigation'
import { useUser } from '@clerk/nextjs';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';


const MeetingTypeList = () => {
 
  const [MeetingState, setMeetingState] = 
  useState<'isScheduleMeeting'|'isJoiningMeeting' |
  'isInstantMeeting' | undefined>();

  const [values, setValues] = useState({
    dateTime: new Date(),
    description: '',
    link: '',
  });

  const [callDetails, setCallDetails] = useState<Call>();
  const router = useRouter();
  const { user } = useUser();
  const client = useStreamVideoClient();
  

  const createMeeting = async () => {
    if (!client || !user)  {
      toast('Client or user not available');
      return;
    }

    try {
      if (!values.dateTime) {
        toast('Please select a date and time');
        return;
      }

      const id = crypto.randomUUID();
      const call = client.call('default', id);

      if (!call) throw new Error('Failed to create call');

      const startsAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || 'Instant Meeting';

      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });

      setCallDetails(call);

      if (!values.description) {
        router.push(`/meeting/${call.id}`);
      }

      toast('Meeting created successfully');
      
    } catch (error) {
      toast('Failed to create meeting');
    }
  };

  return (
    <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
       <HomeCard 
       img="/icons/add-meeting.svg" 
       title="New Meeting"
       description="Start an instant meeting"
       handleClick={() => setMeetingState('isInstantMeeting')}
       className="bg-orange-1"
       /> 
       <HomeCard 
        img="/icons/schedule.svg" 
        title="Schedule Meeting"
        description="Plan your meeting"
        handleClick={() => setMeetingState('isScheduleMeeting')}
        className="bg-blue-1"
       /> 
       <HomeCard 
        img="/icons/recordings.svg" 
        title="View Recordings"
        description="Check out your recordings"
        handleClick={() => setMeetingState('isJoiningMeeting')}
        className="bg-purple-1"
       /> 
       <HomeCard 
        img="/icons/join-meeting.svg" 
        title="Join Meeting"
        description="via invitation link"
        handleClick={() => setMeetingState('isJoiningMeeting')}
        className="bg-yellow-1"
       /> 
       <MeetingModal
       isOpen={MeetingState === 'isInstantMeeting'}
       onClose={() => setMeetingState(undefined)}
       title='Start an Instant Meeting'
       className='text-center'
       buttonText='Start Meeting'
       handleClick={createMeeting}
       />
    </section>
  );
};

export default MeetingTypeList;