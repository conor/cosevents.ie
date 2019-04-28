import React from 'react'
import { css, jsx } from '@emotion/core'

import theme from '../lib/theme'

const Text = ({
  as = 'p',
  children,
  size = 3,
  color = 'white',
  weight = 'normal',
  lineHeight = 'heading',
}) =>
  jsx(as, {
    css: css`
      color: ${theme.colors[color]};
      font-family: ${theme.typeFace.sansSerif};
      font-size: ${theme.typeScale[`x${size}`]};
      font-weight: ${theme.typeWeight[weight]};
      line-height: ${theme.lineHeights.heading};
      margin: 0;
      padding: 0;
    `,
    children: children,
  })

export default Text
