import React from 'react'

import Text from '../components/Text'
import Spacer from '../components/Spacer'
import ActionItems from '../components/ActionItems'
import SocialLinks from '../components/SocialLinks'
import Header from '../components/Header'
import { Row } from '../components/Grid'

const Index = () => (
  <Row>
    <Header />
    <main>
      <Text
        as="h1"
        size={6}
        color="secondary"
        weight="bold"
        animate={true}
        animationDuration="1.1s"
      >
        Organising an event?
      </Text>
      <Spacer size={2} />
      <Text size={5} animate={true} animationDuration="1.2s">
        Take the stress away and let the experts at it!
      </Text>
      <ActionItems />
      <Text as="h2" size={5} animate={true} animationDuration="1.6s">
        Or just follow our latest adventures on social media
      </Text>
      <SocialLinks />
    </main>
  </Row>
)

export default Index
