import React from 'react'
import styled from 'styled-components'
import FlexContainer from '../hocs/flexContainer'
import FlexRow from '../hocs/flexRow'
import FlexItemLeft from '../hocs/flexItemLeft'
import FlexItemRight from '../hocs/flexItemRight'
import { mediaQueryLg } from '../hocs/mediaQueries'

const Some = styled.section`
  background-color: silver;
`

const ItemRed = styled.div`
  font-size: 16px;
  background-color: red;
  min-height: 100px;
  height: 100%;
  padding: 0.5em;
`
const ItemGrey = styled.div`
  font-size: 16px;
  background-color: grey;
  min-height: 100px;
  height: 100%;
  padding-left: 2rem;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-right: 0.5em;

  ${mediaQueryLg(`
    padding-left: 0.5em;
  `)}
`

const SomeFlexRow = styled(FlexRow)`
  justify-content: center;
`

const Component = () => {
  return (
    <Some>
      <FlexContainer>
        <SomeFlexRow>
          <FlexItemLeft baseSize={3} lgSize={10} mdSize={11} smSize={12}>
            <ItemRed>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita consequuntur ea ab.
              Exercitationem pariatur in doloremque.
            </ItemRed>
          </FlexItemLeft>

          <FlexItemRight baseSize={9} lgSize={10} mdSize={11} smSize={12}>
            <ItemGrey>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita consequuntur ea ab.
              Exercitationem pariatur in doloremque. Dolor natus non, inventore vel quasi architecto
              mollitia ipsam quaerat voluptatem deserunt nobis atque pariatur officiis, cum eos
              error ratione. Eaque eum cupiditate in, nostrum temporibus amet iste officia aliquid
              dignissimos dolorum deleniti repudiandae praesentium corporis atque ex quasi quos hic,
              rem cum ea mollitia culpa unde commodi laboriosam.
            </ItemGrey>
          </FlexItemRight>
        </SomeFlexRow>
      </FlexContainer>
    </Some>
  )
}

export default Component
