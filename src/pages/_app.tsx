import { Hydrate, QueryClientProvider, QueryClient } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import '../styles/globals.css'

interface CustomAppProps extends AppProps {
  pageProps: any,
}

function MyApp({ Component, pageProps }: CustomAppProps) {

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
