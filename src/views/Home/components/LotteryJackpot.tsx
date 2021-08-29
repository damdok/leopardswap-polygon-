import React from 'react'
import { Text } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalRewards } from 'hooks/useTickets'

const LotteryJackpot = () => {
  const TranslateString = useI18n()
  const lotteryPrizeAmount = useTotalRewards()
  const { account } = useWallet()

   if (!account) {
    return (
      <Text color="text" style={{ lineHeight: '3',fontSize:"15px" }}>
        {TranslateString(298, 'Locked')}
      </Text>
    )
  }
  return (
    <Text color="text" style={{ fontSize:"20px" }}>
      {getBalanceNumber(lotteryPrizeAmount).toLocaleString(undefined, {
        maximumFractionDigits: 2,
      })}
    </Text>
  )
}

export default LotteryJackpot
