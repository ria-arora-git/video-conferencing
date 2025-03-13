// import { StreamCall, StreamVideo, StreamVideoClient, User, } from "@stream-io/video-react-sdk";
// import { useEffect } from "react";
  
//   const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;


  
//   export const StreamVideoProvider = ({children} : { children : ReactNode }) => {
    
//     const [videoClient, setVideoClient] = useState<StreamVideoClient>();
//     const { user,isLoaded } = useUser();

//     useEffect(() => {
//       const client = new StreamVideoClient(apiKey);
//       setVideoClient(client);
//     }

//     return (
        

//       <StreamVideo client={videoClient}>
     
//       </StreamVideo>
//     );
//   };

// export default StreamVideoProvider;