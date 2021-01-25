import React, { FC } from 'react'
import styled from 'styled-components'

const ProfitItem = styled.div`
  justify-self: space-between;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
`

const Image = styled.img`
  border-radius: 50%;
`

const Title = styled.h1`
  color: #fff;
  font-size: 24px;
  margin-top: 3px;
`
const SubTitle = styled.h2`
  color: red;
  font-size: 16px;
  margin-top: 3px;
  margin-bottom: 3px;
`
interface props {
  imageSrc: string
  title: string
  subTitle: string
}
const Component: FC<props> = ({ imageSrc, title, subTitle }) => {
  return (
    <ProfitItem>
      <Image src={imageSrc} />
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </ProfitItem>
  )
}

export default Component
