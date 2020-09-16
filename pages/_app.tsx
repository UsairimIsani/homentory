import { FC } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: { Component: FC, pageProps: {} }) {
  return <Component {...pageProps} />
}

export default MyApp
