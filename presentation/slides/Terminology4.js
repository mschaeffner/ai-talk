import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../ui/ContentWrapper'

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
    <Term>
      Machine Learning
    </Term>
    <Term>
      Artificial Intelligence
    </Term>
  </ContentWrapper>
