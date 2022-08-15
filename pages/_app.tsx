import '../styles/globals.scss'
import type { AppProps } from 'next/app'

import { Layout } from '../components/index'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  )
}

export default MyApp
