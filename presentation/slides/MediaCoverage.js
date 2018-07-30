import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../ui/ContentWrapper'
import { Appear, Image } from 'spectacle'

const IMAGES = [
  require('../../assets/images/headline0.png'),
  require('../../assets/images/headline1.png'),
  require('../../assets/images/headline2.png'),
  require('../../assets/images/headline3.png'),
  require('../../assets/images/headline4.png'),
  require('../../assets/images/headline5.png'),
  require('../../assets/images/headline6.png'),
  require('../../assets/images/headline7.png'),
  require('../../assets/images/headline8.png'),
  require('../../assets/images/headline9.png'),
]

IMAGES.forEach(src => {
  const image = new Image()
  image.src = src
})

export default () =>
  <ContentWrapper>

    {IMAGES.map((image, index) =>
      <Appear key={image}>
        <div style={{width: '70%', position: 'absolute', top:(20*index), left:(20*index)}}>
          <Image src={image.replace('/', '')} />
        </div>
      </Appear>
    )}

  </ContentWrapper>


  /*

  There mainly 3 directions these articles go.

  1) AI kills a lot of jobs, and many people get unemployed.

  2) AI kills us. Because there will be super intelligent robots
      we want have in control anymore.

  3) AI is just a hype. It won't work. People have been talking about AI
      for more then 50 years, but these system are still really stupid.
      Compared to what humans are capable of.

  */
