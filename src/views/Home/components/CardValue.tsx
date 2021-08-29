import React, { useEffect, useRef,useContext } from 'react'
import { useCountUp } from 'react-countup'
import { Text } from '@pancakeswap-libs/uikit'
import { ThemeContext } from 'styled-components'

interface CardValueProps {
  value: number
  decimals?: number
  fontSize?: string
  prefix?: string
  surfix?: string
}

const CardValue: React.FC<CardValueProps> = ({ value, decimals, fontSize = '20px', prefix,surfix='' }) => {
  const { countUp, update } = useCountUp({
    start: 0,
    end: value,
    duration: 1,
    separator: ',',
    decimals:
      // eslint-disable-next-line no-nested-ternary
      decimals !== undefined ? decimals : value < 0 ? 4 : value > 1e5 ? 0 : 3,
  })

  const updateValue = useRef(update)

  useEffect(() => {
    updateValue.current(value)
  }, [value, updateValue])
  const theme = useContext(ThemeContext)
  return (    
    <Text bold fontSize={fontSize} style={{color:theme.colors.text}}>
      {prefix}{countUp}{surfix}
    </Text>
  )
}

export default CardValue
