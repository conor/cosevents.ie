import React from 'react'

import Text from '../components/Text'
import ActionItems from '../components/ActionItems'
import SocialLinks from '../components/SocialLinks'
import Header from '../components/Header'

const Index = () => (
  <>
    <Header />
    <main>
      <div>
        <Text as="h1" size={6} color="secondary" weight="bold">
          Organizing an event?
        </Text>
        <Text size={5}>Take the stress away and let the experts at it!</Text>
        <ActionItems />
        <Text as="h2" size={5}>
          Or just follow our latest adventures on social media
        </Text>
        <SocialLinks />
      </div>
    </main>
  </>
)

export default Index
