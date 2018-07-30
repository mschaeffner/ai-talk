import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../ui/ContentWrapper'
import { Heading } from 'spectacle'

import { LineChart, XAxis, YAxis, Line, CartesianGrid } from 'recharts'


const data = [
  {name: '', value: 26.493000},
  {name: '1920', value: 25.199552},
  {name: '', value: 22.081520},
  {name: '1930', value: 18.885856},
  {name: '', value: 16.676000},
  {name: '1940', value: 13.931531},
  {name: '', value: 11.629000},
  {name: '1950', value: 7.604000},
  {name: '', value: 4.309000},
  {name: '1960', value: 3.089000}
]


export default () =>
  <ContentWrapper>

    <Heading size={6} textColor="primary">Horses in Mio. (USA)</Heading>

    <LineChart width={1000} height={440} data={data}>
      <XAxis dataKey="name" stroke="#eee" />
      <YAxis ticks={[5, 10, 15, 20, 25]} stroke="#eee" />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
      <Line type="monotone" dataKey="value" stroke="#03A9FC" strokeWidth={3} dot={{ stroke: 'white', strokeWidth: 5 }} />
    </LineChart>

  </ContentWrapper>


/*

  There is only 1 class of workers, for that no new jobs were created in the last 200 years. Horse.

  US Horse population. 22 Mio in 1915, 3 Mio in 1960.

  Is it possible that we will face the some thing as humans in the future, that are work ois not needed anymorem because of automation and AI.

  Ok, we can learn and we can adapt. So we can find jobs. Horse can not.

  But the point of AI is, it's in the defination it self, that it can learn and adapt.




*/
