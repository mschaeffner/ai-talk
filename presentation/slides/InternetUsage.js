import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../ui/ContentWrapper'
import { Appear, Text, Heading } from 'spectacle'

const STATS = [
  {
    number:   '18,000',
    text:     'minutes of video',
    provider: 'YouTube',
  },
  {
    number:   '185,000',
    text:     'photos',
    provider: 'Instagram/Facebook',
  },
  {
    number:   '470,000',
    text:     'tweets',
    provider: 'Twitter',
  },
  {
    number:   '500,000',
    text:     'comments',
    provider: 'Facebook',
  },
  {
    number:   '42,000,000',
    text:     'messages',
    provider: 'WhatsApp/Facebook',
  }
]

const SubHeading = styled.div`
  font-size: 80%;
  padding-bottom: 50px;
`

export default () =>
  <ContentWrapper>

    <Heading size={3} caps textColor="primary">Content</Heading>
    <SubHeading>
      created every minute
    </SubHeading>

    {STATS.map(item =>
      <Appear>
        <div style={{display: 'flex', lineHeight: '150%'}}>
          <div style={{width: '30%', textAlign: 'right', paddingRight: '20px'}}>
            <Text textColor="tertiary">{item.number}</Text>
          </div>
          <div>
          <Text textColor="primary">
            {item.text}

            <span style={{fontSize: '50%', paddingLeft: '10px'}}>
              ({item.provider})
            </span>

          </Text>
          </div>
        </div>
      </Appear>
    )}

  </ContentWrapper>



  /*

  Almost 3 billion smartphones. And with these devices we constantly send messages,
  take photos and video, share our GPS location.

  You somehow understand that we have a lot of data now, and a lot of processing power with cloud computing.
  Ok. But how does this related to AI now?

  */
