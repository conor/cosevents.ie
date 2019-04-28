import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Global, css } from '@emotion/core'

import theme from '../lib/theme'

const globalStyles = css`
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  html {
    line-height: ${theme.lineHeights.heading};
    -webkit-text-size-adjust: 100%;
  }
  body {
    margin: 0;
    background: ${theme.colors.tertiary};
    padding: ${theme.spacing.x3};
  }
`

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Global styles={globalStyles} />
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
            rel="stylesheet"
          />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
