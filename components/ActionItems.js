import React from 'react'
import { css } from '@emotion/core'

import theme from '../lib/theme'

import ActionItem from './ActionItem'

import Phone from '../icons/Phone'
import Envelope from '../icons/Envelope'
import Whatsapp from '../icons/Whatsapp'

const actionItems = [
  { text: 'Call us', href: 'tel:00353872291753', icon: Phone },
  { text: 'Email us', href: 'mailto:caraghoshea@gmail.com', icon: Envelope },
  {
    text: 'Chat to us',
    href: 'https://api.whatsapp.com/send?phone=+353872291753',
    icon: Whatsapp,
  },
]

const ulStyle = css`
  padding: 0;
  margin: ${theme.spacing.x4} 0;
`

const ActionItems = () => (
  <ul css={ulStyle}>
    {actionItems.map((item, idx) => (
      <ActionItem
        key={idx}
        animate={true}
        animationDuration={`${1.2 + idx / 10}s`}
        {...item}
      />
    ))}
  </ul>
)

export default ActionItems
