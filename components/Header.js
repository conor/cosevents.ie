import React from 'react'
import Head from 'next/head'
import { css } from '@emotion/core'

import theme from '../lib/theme'
import { fadeInDown } from '../lib/animations'

import Logo from '../icons/Logo'

const headerStyles = css`
  margin: ${theme.spacing.x3} 0 ${theme.spacing.x6};
  animation: ${fadeInDown} 1s ease;
`

const Header = () => (
  <header css={headerStyles}>
    <Head>
      <meta
        name="Description"
        content="COSevents.ie - Stress free event planning based out of Limerick, Ireland"
      />
      <title>
        COSevents.ie - Stress free event planning based out of Limerick, Ireland
      </title>

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicon-16x16.png"
      />
      <link rel="manifest" href="/static/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/static/safari-pinned-tab.svg"
        color="#d8328b"
      />
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <meta name="msapplication-TileColor" content="#4f354a" />
      <meta name="msapplication-config" content="/static/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <a href="/">
      <Logo />
    </a>
  </header>
)

export default Header
