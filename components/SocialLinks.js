import React from 'react'
import { css } from '@emotion/core'

import theme from '../lib/theme'

import Instagram from '../icons/Instagram'
import Facebook from '../icons/Facebook'

const ulStyle = css`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  & > li {
    padding-right: ${theme.spacing.x3};
  }
`

const SocialLinks = () => (
  <ul css={ulStyle}>
    <li>
      <a href="https://www.instagram.com/cosevents.ie/">
        <Instagram color="secondary" />
      </a>
    </li>
    <li>
      <a href="https://www.facebook.com/COSevents.ie/">
        <Facebook color="secondary" />
      </a>
    </li>
    {/*<li><a href="">Twitter</a></li>*/}
  </ul>
)

export default SocialLinks
