import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner"
import "@stream-io/video-react-sdk/dist/css/styles.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reunivo",
  description: "App for virtual meetings",
  icons: {
    icon: "/icons/favicon.png"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
    
          
      }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-dark-2 antialiased` }
      >
        {children}
        <Toaster />
      </body>
      </ClerkProvider>
    </html>
  );
}

