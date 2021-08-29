import React, { useState } from 'react'
import styled from 'styled-components'
import { Timeline } from 'react-twitter-widgets'
import { Card, Heading } from '@pancakeswap-libs/uikit'

const MainContainer = styled(Card)`
  grid-row-start: 2;
  grid-row-end: 5; 
  padding: 24px;
  border-radius: 10px;
`

const ItemDiv = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
`

const Announcement = () => {
  const [marketCap,setMarketCap] = useState("")
  return (
    <MainContainer>
      <Heading color="textSubtle" size="xl" style={{ width:"100%",textAlign: "center",marginTop: "10px" }}>Announcments</Heading>
      <div style={{width: "80%",margin: "0 auto", marginTop: "3em"}}>
      <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'LeopardSwap'
          }}
          options={{
            height: '600',
            chrome: "noheader, nofooter",
            width: "450"
          }}
        />
      </div>
    </MainContainer>
  )
}
export default Announcement