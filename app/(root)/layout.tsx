import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "Reunivo",
  description: "App for virtual meetings",
  icons: {
    icon: "/icons/favicon.png"
  },
};


const RootLayout = ({children}:{children:ReactNode}) => {
  return (
    <main>
    <StreamVideoProvider>
       {children}
    </StreamVideoProvider>
    </main>
  )
}

export default RootLayout;