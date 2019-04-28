import React from 'react'
import Head from 'next/head'
import { css } from '@emotion/core'

import theme from '../lib/theme'

import Logo from '../icons/Logo'

const headerStyles = css`
  margin: ${theme.spacing.x3} 0 ${theme.spacing.x6};
`

const Header = () => (
  <header css={headerStyles}>
    <Head>
      <title>
        COSevents.ie - Stress free event planning based out of Limerick, Ireland
      </title>
    </Head>
    <a href="/">
      <Logo />
    </a>
  </header>
)

export default Header
