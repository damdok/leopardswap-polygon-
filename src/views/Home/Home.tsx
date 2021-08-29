import React from 'react'
import styled from 'styled-components'
import { BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import LPWorth from './components/LPWorth'
import LotteryCard from './components/LotteryCard'
import AddTokenCard from './components/AddTokenCard'
import Announcement from './components/Announcement'

const Hero = styled.div`
  align-items: center;
  background-repeat: no-repeat;
  background-size: 100px 30px;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 5px;
  padding-top: 0px;
  text-align: center;
  @media (max-width: 768px) {
    min-height: 3vw;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    background-position: left center, right center;
    background-size: 30px;
    height: 30px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;
  max-width: 1200px;
  margin: 0 auto;
  grid-gap: 24px;

  & > div {
    grid-column: span 8;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: 2/span 10;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`


const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero/>
      <div>
        <Cards>
          <FarmStakingCard />
          <LotteryCard/>
          <Announcement />
          <CakeStats />
          <LPWorth />
          <TotalValueLockedCard />
          <AddTokenCard />
	      </Cards>
      </div>
    </Page>
  )
}

export default Home
