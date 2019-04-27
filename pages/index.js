import React from 'react'
import Head from 'next/head'

const Index = () => (
  <>
    <Head>
      <title>
        COSevents.ie - Stress free event planning based out of Limerick, Ireland
      </title>
    </Head>
    <header>
      <h1>
        <a href="/">COSevents.ie</a>
      </h1>
    </header>
    <main>
      <div>
        <h1>Organizing an event?</h1>
        <p>Take the stress away and let the experts at it!</p>
        <ul>
          <li>
            <a href="tel:00353872291753">Call us</a>
          </li>
          <li>
            <a href="mailto:caraghoshea@gmail.com">Email us</a>
          </li>
          <li>
            <a href="https://api.whatsapp.com/send?phone=+353872291753">
              Chat to us
            </a>
          </li>
        </ul>
        <h2>Or just follow our latest adventures on social media</h2>
        <ul>
          <li>
            <a href="https://www.instagram.com/cosevents.ie/">Instagram</a>
          </li>
          <li>
            <a href="https://www.facebook.com/COSevents.ie/">Facebook</a>
          </li>
          {/*<li><a href="">Twitter</a></li>*/}
        </ul>
      </div>
    </main>
  </>
)

export default Index
