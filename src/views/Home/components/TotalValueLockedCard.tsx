import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'

const StyledTotalValueLockedCard = styled(Card)`
  text-align: center;
  border-radius: 10px;

  ${({ theme }) => theme.mediaQueries.lg} {
    max-width: none;
  }
`

const CardMidContent = styled(Heading).attrs({ size: 'lg' })`
  line-height: 1.1em;
  padding-top: 10px;
`

const TotalValueLockedCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue();
  // const tvl = totalValue.toFixed(2);

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading color="textSubtle" size="xl">
          {TranslateString(999, 'Total Value Locked (TVL)')}
        </Heading>
	      <CardMidContent color="text">
          <CardValue 
          value={totalValue.toNumber()} 
          prefix="$" decimals={2} fontSize="30px"/>
        </CardMidContent>
        <Heading color="text" size="sm" style={{ marginTop: "10px"}}>
	   	    Across all Farms and Pools
	      </Heading>
	    </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
