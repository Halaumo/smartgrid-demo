import React from 'react'
import styled from 'styled-components'
import FlexContainer from '../hocs/flexContainer'
import FlexRow from '../hocs/flexRow'
import FlexItem from '../hocs/flexItem'
import Human from '../components/human'
import image1 from '@/images/index/humans/1.png'
import image2 from '@/images/index/humans/2.png'
import image3 from '@/images/index/humans/3.png'
import image4 from '@/images/index/humans/4.png'

const Humans = styled.section`
  background-color: #6cc372;
  padding-bottom: 15px;
`

const Title = styled.h1`
  font-size: 40px;
  color: #000;
  padding-top: 20px;
  text-align: center;
`
const SubTitle = styled.h2`
  color: #fff;
  font-size: 20px;
  margin-top: 20px;
  text-align: center;
`

const HumanFlexItem = styled(FlexItem)`
  margin-top: 15px;
`

const HumanFlexRow = styled(FlexRow)`
  justify-content: center;
`

const Component = () => {
  return (
    <Humans>
      <FlexContainer>
        <Title>Talented & Experts</Title>

        <SubTitle>This is our team :)</SubTitle>

        <HumanFlexRow>
          <HumanFlexItem baseSize={3} lgSize={6} mdSize={6} smSize={11}>
            <Human
              imageSrc={image1}
              title='Karl Ibn Huam Pablo Antonio'
              job='Some some'
              follow='Follow'
            />
          </HumanFlexItem>

          <HumanFlexItem baseSize={3} lgSize={6} mdSize={6} smSize={11}>
            <Human
              imageSrc={image2}
              title='Some Human'
              job='Some some'
              follow='Follow'
            />
          </HumanFlexItem>

          <HumanFlexItem baseSize={3} lgSize={6} mdSize={6} smSize={11}>
            <Human
              imageSrc={image3}
              title='Some Human'
              job='Some some'
              follow='Follow'
            />
          </HumanFlexItem>

          <HumanFlexItem baseSize={3} lgSize={6} mdSize={6} smSize={11}>
            <Human
              imageSrc={image4}
              title='Some Human'
              job='Some some'
              follow='Follow'
            />
          </HumanFlexItem>
        </HumanFlexRow>
      </FlexContainer>
    </Humans>
  )
}

export default Component
