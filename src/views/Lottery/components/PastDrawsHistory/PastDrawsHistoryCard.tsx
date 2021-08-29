import React from 'react'
import { Card, CardBody, Heading } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import HistoryChart from './HistoryChart'
import Legend from './Legend'

const PastDrawsHistoryCard: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Card style={{ border:'1px solid #000000' }}>
      <CardBody>
        <Heading size="md" color="text" style={{textAlign:"center"}}>{TranslateString(999, 'History')}</Heading>
        <Legend />
        <HistoryChart />
      </CardBody>
    </Card>
  )
}

export default PastDrawsHistoryCard
