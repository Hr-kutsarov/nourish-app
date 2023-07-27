import { Inter } from 'next/font/google'
import { Mitr } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const mitr = Mitr({ subsets: ['latin-ext'], weight: '300'})

import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home({}) {
  const { data: session }:any = useSession();

  if (session) {
    return (
      <div className='flex flex-col gap-4 px-12 py-8 rounded-lg'>
        <h1 className={`${mitr.className} text-3xl text-green-300`}>Nourish</h1>
        <h1>Signed in as {session?.user.email}</h1>
        <Link href='/profile'>Navigate to Profile</Link>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    )
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center gap-4 p-24 ${inter.className}`}
    >
      <button className='bg-green-600 px-5 py-3 rounded-lg' onClick={() => signIn('github', {redirect: true})}>Sign in with GitHub</button>
      <button className='bg-blue-400 px-5 py-3 rounded-lg' onClick={() => signIn('google')}>Sign in with Google</button>
      <Link href='/profile'>Navigate to Profile</Link>
    </main>
  )
}
