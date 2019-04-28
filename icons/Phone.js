import React from 'react'

import theme from '../lib/theme'

const Phone = ({ color = 'primary' }) => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <title>Phone icon</title>
    <path
      d="M21.429 0H2.57A2.571 2.571 0 0 0 0 2.571V21.43A2.571 2.571 0 0 0 2.571 24H21.43A2.571 2.571 0 0 0 24 21.429V2.57A2.571 2.571 0 0 0 21.429 0zM5.036 20.571a.804.804 0 0 1-.783-.622l-.804-3.483a.804.804 0 0 1 .467-.919l3.75-1.607a.804.804 0 0 1 .938.23l1.66 2.03a12.42 12.42 0 0 0 5.935-5.935l-2.03-1.66a.804.804 0 0 1-.23-.94l1.608-3.75a.804.804 0 0 1 .92-.466l3.482.804a.803.803 0 0 1 .622.783c0 8.587-6.96 15.535-15.535 15.535z"
      fill={theme.colors[color]}
      fillRule="nonzero"
    />
  </svg>
)

export default Phone
