import React from 'react'
import SmartGrid from './hocs/smartgrid'
import Some from './containers/some'
import Profit from './containers/profit'
import Humans from './containers/humans'
import PortfolioBox from './containers/portfolioBox'
import Pricing from './containers/pricing'

const Index = () => {
  return (
    <>
      <SmartGrid />
      <Some />
      <Profit />
      <Humans />
      <PortfolioBox />
      <Pricing />
    </>
  )
}

export default Index
