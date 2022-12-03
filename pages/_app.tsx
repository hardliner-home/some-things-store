import React from 'react'

import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import Head from 'next/head'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { DefaultSeo } from 'next-seo'

// src
import SEO from '../next-seo.config'
import theme from '../src/theme'
import createEmotionCache from '../src/createEmotionCache'
import AuthContextProvider from '../src/providers/AuthContextProvider'

const clientSideEmotionCache = createEmotionCache()

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout,
  emotionCache?: EmotionCache
}

export default function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width"/>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>
      <DefaultSeo {...SEO} />

      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <AuthContextProvider>
          {getLayout(<Component {...pageProps} />)}
        </AuthContextProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}
