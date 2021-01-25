import React from 'react'
import styled from 'styled-components'
import Card from '../components/card'
import FlexContainer from '../hocs/flexContainer'
import FlexRow from '../hocs/flexRow'
import FlexItem from '../hocs/flexItem'
import { mediaQueryLg, mediaQueryMd } from '../hocs/mediaQueries'

const Pricing = styled.section`
  padding-bottom: 15px;
`

const Footer = styled.p`
  text-align: center;
  color: #eb4f4e;
  font-size: 20px;
  margin-top: 20px;
`

const PricingFlexRow = styled(FlexRow)`
  margin-top: -161px;
  align-items: flex-end;
  justify-content: center;

  ${mediaQueryLg(`
    margin-top: -181px;
  `)}

  ${mediaQueryMd(`
    margin-top: -5px;
  `)}
`

const PricingFlexItem = styled(FlexItem)`
  margin-top: 20px;
`

const Component = () => {
  return (
    <Pricing>
      <FlexContainer>
        <PricingFlexRow>
          <PricingFlexItem baseSize={4} lgSize={4} mdSize={10} smSize={11}>
            <Card
              title='Start Up'
              subTitle='For beginners'
              descriptions={{
                one: 'Lorem ipsum',
                two: 'Lorem dolor sit amet',
                three: 'Dolor sit amet',
                four: 'Lorem ipsum',
              }}
              price={{
                cur: '$',
                val: '15',
                per: '/mo',
              }}
            />
          </PricingFlexItem>

          <PricingFlexItem baseSize={4} lgSize={4} mdSize={10} smSize={11}>
            <Card
              title='Standart'
              subTitle='More than what you have dreamed with adn lorem ipsum ofcourse'
              descriptions={{
                one: 'Lorem ipsum',
                two: 'Lorem dolor sit amet',
                three: 'Dolor sit amet',
                four: 'Lorem ipsum',
              }}
              price={{
                cur: '$',
                val: '25',
                per: '/mo',
              }}
            />
          </PricingFlexItem>

          <PricingFlexItem baseSize={4} lgSize={4} mdSize={10} smSize={11}>
            <Card
              title='Professional'
              subTitle='For business people'
              descriptions={{
                one: 'Lorem ipsum',
                two: 'Lorem dolor sit amet',
                three: 'Dolor sit amet',
                four: 'Lorem ipsum',
              }}
              price={{
                cur: '$',
                val: '99',
                per: '/mo',
              }}
            />
          </PricingFlexItem>
        </PricingFlexRow>

        <Footer>All more avalible plans all needs... Go away!</Footer>
      </FlexContainer>
    </Pricing>
  )
}

export default Component
