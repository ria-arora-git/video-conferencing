import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import MobileNav from './MobileNav';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

const Navbar = () => {
  return (
    <nav className='flex-between fixed z-50 w-full 
    bg-dark-1 px-6 py-4 lg:px-10' >
      <Link href= "/" className="flex items-center gap-1">
      <Image
       src="/favicon.png"
       width={40}
       height={40}
       alt="logo"
       className='max-sm:size-10'
      />
      <p className='text-2xl font-extrabold text-white max-sm:hidden'>Univo</p>
      </Link>
      <div className='flex-between gap-5'>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
         <MobileNav />
      </div>

    </nav>
  )
}

export default Navbar