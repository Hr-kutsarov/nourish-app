import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { SessionProvider } from "next-auth/react"

import { useState } from 'react'

import Header from '@/components/header/Header'
import AuthModal from '@/components/modals/auth-modal'

export default function App({ Component, pageProps: { session, ...pageProps} }: AppProps) {
  const [client] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={client}>
      <SessionProvider session={session}>
        <Header />
        <AuthModal />
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </SessionProvider>
    </QueryClientProvider>

  )
}
