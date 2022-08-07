import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <Head>
        <title>Github User Search</title>
        <link
          rel='shortcut icon'
          href='/assets/favicon-32x32.png'
          type='image/png'
        />
        <meta
          name='description'
          content='Search for Github users and see their profile and repositories'
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
