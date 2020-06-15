import React from 'react'
import { css } from '@emotion/core'
import theme from '../lib/theme'

import Text from '../components/Text'
import Spacer from '../components/Spacer'
import { Row } from '../components/Grid'

const wrapperStyles = css`
  width: 100%;
  background: ${theme.colors.primary};
`

const Notice = () => (
  <div css={wrapperStyles}>
    <Row>
      <Text size={3} animate={true} animationDuration="1.2s">
        <strong>New website is coming soon!</strong>
      </Text>
    </Row>
  </div>
)

export default Notice
