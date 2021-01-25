import React from 'react'
import styled from 'styled-components'
import Portfolio from '../components/portfolio'
import FlexContainer from '../hocs/flexContainer'
import FlexRow from '../hocs/flexRow'
import FlexItem from '../hocs/flexItem'
import { mediaQueryMd } from '../hocs/mediaQueries'
import smsClouds from '@/images/index/portfolioBox/sms-clouds.png'
import blueAppleSoft from '@/images/index/portfolioBox/blue-apple-soft.png'
import togApp from '@/images/index/portfolioBox/tog-app.png'

const PortfolioBox = styled.section`
  background-color: #f0f0f0;
  padding-top: 30px;
  padding-bottom: 230px;

  ${mediaQueryMd(`
    padding-bottom: 65px;
  `)}
`

const Title = styled.h1`
  color: #000;
  font-size: 40px;
  text-align: center;
`

const SubTitle = styled.h2`
  color: #6cc372;
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
`

const FlexItemPortfolio = styled(FlexItem)`
  margin-top: 20px;
`

const FlexRowPortfolio = styled(FlexRow)`
  justify-content: center;
`

const Component = () => {
  return (
    <PortfolioBox>
      <FlexContainer>
        <Title>Elegant & Genuine</Title>

        <SubTitle>This is how our works looks like :)</SubTitle>

        <FlexRowPortfolio>
          <FlexItemPortfolio baseSize={3} lgSize={5} mdSize={5} smSize={11}>
            <Portfolio imageSrc={smsClouds} description='SMS Clouds' />
          </FlexItemPortfolio>

          <FlexItemPortfolio baseSize={3} lgSize={5} mdSize={5} smSize={11}>
            <Portfolio imageSrc={blueAppleSoft} description='Blue Apple Soft' />
          </FlexItemPortfolio>

          <FlexItemPortfolio baseSize={3} lgSize={5} mdSize={5} smSize={11}>
            <Portfolio imageSrc={togApp} description='Together Application' />
          </FlexItemPortfolio>

          <FlexItemPortfolio baseSize={3} lgSize={5} mdSize={5} smSize={11}>
            <Portfolio imageSrc={blueAppleSoft} description='FCBarselona Club' />
          </FlexItemPortfolio>
        </FlexRowPortfolio>
      </FlexContainer>
    </PortfolioBox>
  )
}

export default Component
