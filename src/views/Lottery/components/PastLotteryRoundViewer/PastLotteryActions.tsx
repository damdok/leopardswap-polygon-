import React from 'react'
import styled from 'styled-components'
import { Button, LinkExternal, useModal } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useTickets from 'hooks/useTickets'
import UnlockButton from 'components/UnlockButton'
import MyTicketsModal from '../TicketCard/UserTicketsModal'

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  & > div {
    flex: 1;
    width: 100%;
  }
`

const ExternalLinkWrap = styled(LinkExternal)`
  align-items: center;
  display: flex;
  height: 48px;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  & > svg{
    fill: ${({ theme }) => theme.colors.primary}
  }
`

const TicketCard: React.FC<{ contractLink?: string; lotteryNumber?: number }> = ({ contractLink, lotteryNumber }) => {
  const TranslateString = useI18n()
  const tickets = useTickets(lotteryNumber)
  const ticketsLength = tickets.length
  const [onPresentMyTickets] = useModal(<MyTicketsModal myTicketNumbers={tickets} from="buy" />)
  const { account } = useWallet()

  if (!account) {
    return (
      <Wrapper>
        <UnlockButton />
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <div style={{textAlign:"center"}}>
        <Button disabled={ticketsLength === 0} onClick={onPresentMyTickets} className="imgBtn">
          {TranslateString(999, 'View your tickets')}
        </Button>
      </div>
      <div>
        <ExternalLinkWrap color="textSubtle" href={contractLink}>{TranslateString(999, 'View on PolygonScan')}</ExternalLinkWrap>
      </div>
    </Wrapper>
  )
}

export default TicketCard
