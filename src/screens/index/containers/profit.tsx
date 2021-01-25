import React from 'react'
import styled from 'styled-components'
import ProfitItem from '../components/profitItem'
import FlexContainer from '../hocs/flexContainer'
import FlexRow from '../hocs/flexRow'
import FlexItem from '../hocs/flexItem'
import image from '@/images/index/profit/icon.png'

const ProfitFlexRow = styled(FlexRow)`
  justify-content: center;
`

const Profit = styled.section`
  background-color: #232324;
  padding-top: 15px;
  padding-bottom: 15px;
`

const Title = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 40px;
  margin-top: 20px;
`

const SubTitle = styled.h2`
  text-align: center;
  color: #6cc372;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`

const Component = () => {
  return (
    <Profit>
      <FlexContainer>
        <Title>Smart & Creative</Title>

        <SubTitle>This is why you will use it :)</SubTitle>

        <ProfitFlexRow>
          <FlexItem baseSize={4} lgSize={5} mdSize={5} smSize={11}>
            <ProfitItem imageSrc={image} subTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit.' title='Multy Purpose' />
          </FlexItem>

          <FlexItem baseSize={4} lgSize={5} mdSize={5} smSize={11}>
            <ProfitItem imageSrc={image} subTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit.' title='Multy Purpose' />
          </FlexItem>

          <FlexItem baseSize={4} lgSize={5} mdSize={5} smSize={11}>
            <ProfitItem imageSrc={image} subTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit.' title='Multy Purpose' />
          </FlexItem>
        </ProfitFlexRow>
      </FlexContainer>
    </Profit>
  )
}

export default Component
