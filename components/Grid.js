import React from 'react'
import { css } from '@emotion/core'

import theme from '../lib/theme'

export const Row = ({ children }) => (
  <div
    css={css`
      @media (${theme.breakpoints.notSmall}) {
        margin: 0 auto;
        max-width: 800px;
      }
    `}
  >
    {children}
  </div>
)
