import React from 'react'
import { css } from '@emotion/core'

import theme from '../lib/theme'
import { fadeInUp } from '../lib/animations'

const aStyle = css`
  text-decoration: none;
  color: ${theme.colors.white};
  display: flex;
  flex-direction: row;
  align-items: center;
`

const spanStyle = css`
  margin-left: ${theme.spacing.x2};
`

const ActionItem = ({ href, text, icon, animate = false, animationDuration = '1s', animationDelay = '0s' }) => (
  <li
    css={css`
      color: ${theme.colors.white};
      font-family: ${theme.typeFace.sansSerif};
      font-size: ${theme.typeScale.x4};
      font-weight: ${theme.typeWeight.bold};
      line-height: ${theme.lineHeights.heading};
      margin: ${theme.spacing.x3} 0;
      padding: 0;
      list-style: none;
      ${animate &&
        css`
          animation: ${fadeInUp} ${animationDuration} ease;
          animation-delay: ${animationDelay};
        `}
    `}
  >
    <a css={aStyle} href={href}>
      {icon({})}
      <span css={spanStyle}>{text}</span>
    </a>
  </li>
)

export default ActionItem
