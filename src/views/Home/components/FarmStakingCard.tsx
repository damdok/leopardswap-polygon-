import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { Button, Card, CardBody, Heading } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import BigNumber from 'bignumber.js'
import useI18n from 'hooks/useI18n'
import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import UnlockButton from 'components/UnlockButton'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'
import { usePriceCakeBusd } from '../../../state/hooks'
import useTokenBalance from '../../../hooks/useTokenBalance'
import { getCakeAddress } from '../../../utils/addressHelpers'
import useAllEarnings from '../../../hooks/useAllEarnings'
import { getBalanceNumber } from '../../../utils/formatBalance'

const StyledFarmStakingCard = styled(Card)`
  background-image: url('/images/LeopardLarge.png');
  background-repeat: no-repeat;
  // background-position: center right;
  background-position: 110% 0%;
  min-height: 376px;
  text-align: left;
  height: max-content;
  border-radius: 10px;
  @media (max-width: 968px) {
    background-size: 50%;
  }
`

const Block = styled.div`
  z-index: 1;
  position: relative;
`

const CardImage = styled.img`
  // box-shadow: -10px 10px 0 0 #d69f42;
  border-radius: 50%;
  margin-top: 5px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 16px;
`
const Text = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
`

const Actions = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 1em;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWallet()
  const TranslateString = useI18n()
  const farmsWithBalance = useFarmsWithBalance()
  const cakeBalance = getBalanceNumber(useTokenBalance(getCakeAddress()))
  const eggPrice = usePriceCakeBusd().toNumber()
  const allEarnings = useAllEarnings()
  const earningsSum = allEarnings.reduce((accum, earning) => {
    return accum + new BigNumber(earning).div(new BigNumber(10).pow(18)).toNumber()
  }, 0)
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)

  const { onReward } = useAllHarvest(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    try {
      await onReward()
    } catch (error) {
      // TODO: find a way to handle when the user rejects transaction or it fails
    } finally {
      setPendingTx(false)
    }
  }, [onReward])

  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading size="xl" mb="24px" style={{ marginTop: '10px',textAlign: "left" }} color="textSubtle">
          {TranslateString(542, 'Farms & Staking')}
        </Heading>
        <img src="/images/LeoparSmall.png" alt="LEOPARD" style={{ width: "70px",marginBottom: "1em" }}/>
        <Block>
          <Row>
            <Label>LEOPARD Token to Harvest</Label>
          </Row>
 		      <Row>
            <CakeHarvestBalance 
            earningsSum={earningsSum}
            />
          </Row>
          <Row>
            <Text>
              ~${(eggPrice * earningsSum).toFixed(2)}
            </Text>
          </Row>
          <Row style={{marginTop: "1em"}}>
            <Label>LEOPARD Token in Wallet</Label>
          </Row>
          <Row>
            <CakeWalletBalance 
            cakeBalance={cakeBalance} 
            />
          </Row>
          <Row>
            <Text>
              ~${(eggPrice * cakeBalance).toFixed(2)}
            </Text>
          </Row>
        </Block>

        <Actions>
          {account ? (
            <Button
              id="harvest-all"
              disabled={balancesWithValue.length <= 0 || pendingTx}
              onClick={harvestAllFarms}
              fullWidth
            >
              {pendingTx
                ? TranslateString(548, ' LEOPARD Token')
                : TranslateString(999, `Harvest All (${balancesWithValue.length})`)}
            </Button>
          ) : (
            <UnlockButton className="imgBtn"/>
          )}
        </Actions>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
