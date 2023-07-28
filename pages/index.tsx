import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import Link from 'next/link'

export default function Home() {


  return (
    <main
      className={`flex w-full flex-col items-center justify-center gap-4 p-24 ${inter.className}`}
    >
      <h1>Home Page</h1>
    </main>
  )
}
