import React from 'react'
import styled from 'styled-components'
import { Button, Text, useModal } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import useTickets from 'hooks/useTickets'
import MyTicketsModal from '../TicketCard/UserTicketsModal'

const Wrapper = styled.div`
  display: flex;
  
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledText = styled(Text)`
  padding-left: 12px;
`

const Image = styled.img`
  margin-right: 6px;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-right: 20px;
  }
`
const StyledButton = styled(Button)`
  padding: 0 12px;
  height: unset;
  color: ${({ theme }) => theme.colors.textSubtle};
`

const NoPrizesContent: React.FC = () => {
  const TranslateString = useI18n()
  const tickets = useTickets()
  const [onPresentMyTickets] = useModal(<MyTicketsModal myTicketNumbers={tickets} from="buy" />)

  return (
    <Wrapper>
      <Image src="/images/no-prize.svg" alt="no prizes won" />
      <TextWrapper style={{width: "100%"}}>
        <StyledText color="text" style={{margin: "0 auto"}}>{TranslateString(999, 'Sorry, no prizes to collect')}</StyledText>
        <StyledButton variant="text" onClick={onPresentMyTickets} style={{background:"transparent",margin:"0 auto"}}>
          {TranslateString(432, 'View your tickets')}
        </StyledButton>
      </TextWrapper>
    </Wrapper>
  )
}

export default NoPrizesContent
