import React from 'react'
import { Text } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useTotalClaim } from 'hooks/useTickets'
import { getBalanceNumber } from 'utils/formatBalance'
import useI18n from 'hooks/useI18n'
import CardValue from './CardValue'

const CakeWinnings = () => {
  const TranslateString = useI18n()
	const { account } = useWallet()
  const { claimAmount } = useTotalClaim()
   if (!account) {
    return (
      <Text color="text" style={{ lineHeight: '3',fontSize:"15px" }}>
        {TranslateString(298, 'Locked')}
      </Text>
    )
  } 
  return <CardValue value={getBalanceNumber(claimAmount)} fontSize="35px"/>
}

export default CakeWinnings