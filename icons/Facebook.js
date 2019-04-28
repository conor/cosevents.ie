import React from 'react'

import theme from '../lib/theme'

const Facebook = ({ color = 'primary' }) => (
  <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg">
    <title>Facebook icon</title>
    <path
      d="M36 3.857v28.286A3.858 3.858 0 0 1 32.143 36h-6.855V21.76h4.87l.7-5.431h-5.57v-3.472c0-1.575.434-2.644 2.692-2.644h2.877V5.36c-.498-.064-2.202-.217-4.194-.217-4.147 0-6.992 2.531-6.992 7.184v4.01h-4.885v5.432h4.893V36H3.857A3.858 3.858 0 0 1 0 32.143V3.857A3.858 3.858 0 0 1 3.857 0h28.286A3.858 3.858 0 0 1 36 3.857z"
      fill={theme.colors[color]}
      fillRule="nonzero"
    />
  </svg>
)

export default Facebook
