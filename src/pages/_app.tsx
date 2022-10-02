import { Hydrate, QueryClientProvider, QueryClient } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {

  const [queryClient] = useState(() => new QueryClient())

  // Provide the client to your App
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
