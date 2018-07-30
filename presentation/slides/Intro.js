import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../ui/ContentWrapper'
import { Heading } from 'spectacle'

export default () =>
  <ContentWrapper>

    <Heading size={3} caps textColor="primary">
      Artificial Intelligence
    </Heading>

    <Heading size={4} textColor="secondary">
      .
    </Heading>

    <Heading size={4} textColor="tertiary">
      When will my fridge fall in love with the dishwasher?
    </Heading>

  </ContentWrapper>
