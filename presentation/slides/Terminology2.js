import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../ui/ContentWrapper'
import { Image } from 'spectacle'

const image = require('../../assets/neurons.jpg')

const Term = styled.div`
  font-size: 200%;
  line-height: 200%;
  font-weight: bold;
`

export default () =>
  <ContentWrapper>
    <Term>
      Neural Network
    </Term>
    <Image src={image.replace('/', '')} />
  </ContentWrapper>
