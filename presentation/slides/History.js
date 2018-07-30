import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../ui/ContentWrapper'
import { Heading } from 'spectacle'

const Timeline = styled.div`
  border-top: 5px solid ${props => props.color};
  position: absolute;
  bottom: 0;
  left: 25px;
  right: 25px;
  margin-bottom: 100px;
  font-size: 90%;
`

const Section = styled.div`
  position: absolute;
  left: ${props => (props.span * 100 / 66) + '%'};
  text-align: left;
`

const SectionName = styled.div`
  transform: rotate(-45deg);
  transform-origin: top left;
  margin-top: -40px;
  margin-left: 15px;
  white-space: nowrap;
`

const SectionYear = styled.div`
  margin-top: 15px;
  margin-left: -15px;
`

const SectionDot = styled.div`
  margin-top: -10px;
  height: 15px;
  width: 15px;
  background: white;
  border-radius: 15px
`

export default ({theme}) =>
  <ContentWrapper>

    <Heading size={3} caps textColor="primary">History</Heading>

    <Timeline color={theme.screen.colors.tertiary}>

      <Section span={0}>
        <SectionDot/>
        <SectionName>Birth</SectionName>
        <SectionYear>1952</SectionYear>
      </Section>

      <Section span={6}>
        <SectionDot/>
        <SectionName>Golden years</SectionName>
        <SectionYear>1956</SectionYear>
      </Section>

      <Section span={21}>
        <SectionDot/>
        <SectionName>1. AI winter</SectionName>
        <SectionYear>1974</SectionYear>
      </Section>

      <Section span={28}>
        <SectionDot/>
        <SectionName>Boom</SectionName>
        <SectionYear>1980</SectionYear>
      </Section>

      <Section span={35}>
        <SectionDot/>
        <SectionName>2. AI winter</SectionName>
        <SectionYear>1987</SectionYear>
      </Section>

      <Section span={42}>
        <SectionDot/>
        <SectionName>Behind the scenes</SectionName>
        <SectionYear>1993</SectionYear>
      </Section>

      <Section span={56}>
        <SectionDot/>
        <SectionName>Mass media</SectionName>
        <SectionYear>2011</SectionYear>
      </Section>

    </Timeline>
  </ContentWrapper>


/*

1952–1956 The birth of AI
  Artificial Intelligence research was founded as an academic discipline
  The Turing Test was the first serious proposal in the philosophy of artificial intelligence.

1956–1974 The golden years
  A lot of research
  Successes in robotics

1974–1980 The first AI winter
  Expectations to high
  Financial setbacks, no funding anymore
  Limites computer power
  Not enouhg training data
  No one in 1970 could build a database so large and no one knew how a program might learn so much information.

1980–1987 Boom
  The rise of expert systems, focus on domain knowledge

1987–1993 The second AI winter
  Financial setbacks
  Market focused on Desktop computers from Apple and IBM
  There was no longer a good reason to buy them. An entire industry worth half a billion dollars was demolished overnight


1993–2011 Success behind the scenes
  Deep blue won gain world best chess player
  IBM watson defeated the two greatest Jeopardy! Champions
  First successful test of selfdriving cars
  Deep learning, big data and artificial general intelligence: 2011–present
  Due to computing power
  Speech recognition
  Google's search engine

2011–present
  mass media coverage

*/
