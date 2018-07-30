import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../ui/ContentWrapper'
import { Image } from 'spectacle'

const image = require('../../assets/sourcecode.png')

export default () =>
  <ContentWrapper>
    <Image src={image.replace('/', '')} />
  </ContentWrapper>
