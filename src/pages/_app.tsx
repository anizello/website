import { AppProps } from 'next/app'
import Head from 'next/head'

import NextNprogress from 'nextjs-progressbar'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import { IdProvider } from '@radix-ui/react-id'

import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="shortcut icon" href="/img/favicon.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#151718" />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <NextNprogress
        color={theme.colors.teal10}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <IdProvider>
        <Component {...pageProps} />
      </IdProvider>
    </ThemeProvider>
  )
}

export default App
