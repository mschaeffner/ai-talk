import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../ui/ContentWrapper'
import { Image } from 'spectacle'

const image = require('../../assets/horse-carriage.png')

export default () =>
  <ContentWrapper>
    <Image src={image.replace('/', '')} />
  </ContentWrapper>
