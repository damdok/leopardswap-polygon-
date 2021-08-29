import styled from 'styled-components'
import Container from './Container'

const Page = styled(Container)`
  margin-top: -20px;
  padding-top: 16px;
  padding-bottom: 16px;
  background-size: auto 100%; 
  background-attachment: fixed;
  background-position: center;
  min-height: calc(100vh - 280px);
  // max-width: initial;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-top: 24px;
    padding-bottom: 24px;
    background-size: 100% 100%;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 32px;
    padding-bottom: 32px;
  }
`

export default Page
