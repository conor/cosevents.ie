import React from 'react'
import { css } from '@emotion/core'

import theme from '../lib/theme'

const Spacer = ({ inline = false, size = 3 }) => (
  <span
    css={css`
      display: ${inline ? 'inline' : 'block'};
      padding: ${theme.spacing[size]} ${theme.spacing[`x${size}`]} 0 0;
    `}
  />
)

export default Spacer
