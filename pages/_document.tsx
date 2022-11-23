
import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {

  render() {
    return (
      <Html lang='pt-br'>
        <Head>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,400;0,700;0,800;1,400&display=swap');
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument;