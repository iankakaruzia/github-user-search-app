import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en' className='h-full'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body className='h-full bg-gray-200 text-base font-normal text-blue-700 dark:bg-gray-900 dark:text-white'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
