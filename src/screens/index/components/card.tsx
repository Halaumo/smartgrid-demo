import React, { FC } from 'react'
import styled from 'styled-components'

const Card = styled.div`
  text-align: center;
`

const Title = styled.div`
  background: #fdfdfd;
  overflow: hidden;
  padding: 0 5px;
  border: 1px solid #f0f0f0;
  border-radius: 10px 10px 0 0;

  & > h1 {
    text-align: center;
    font-size: 40px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  & > p {
    text-align: center;
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`

const Descriptions = styled.ul`
  & > li {
    background: #f0f0f0;
    padding: 15px 0;
    border-bottom: 1px solid #000;
    font-size: 14px;
  }
`

const Price = styled.div`
  background: #eb4f4e;
  color: #fff;
  padding: 10px 15px;
  border-radius: 0 0 10px 10px;

  & > a {
    color: #000;
    text-decoration: none;
    background: #fff;
    padding: 5px 20px;
    border-radius: 5px;
    margin-left: 0.5em;
  }
`

const Cur = styled.span`
  font-size: 24px;
`
const Val = styled.span`
  font-size: 48px;
`
const Per = styled.span`
  font-size: 20px;
  margin-top: 10px;
`

const Order = styled.a`
  font-size: 16px;
`

interface props {
  title: string
  subTitle: string
  descriptions: {
    one: string
    two: string
    three: string
    four: string
  }
  price: {
    cur: string
    val: string
    per: string
    orderLink?: string
  }
}
const Component: FC<props> = ({ title, subTitle, descriptions, price }) => {
  return (
    <Card>
      <Title>
        <h1>{title}</h1>
        <p>{subTitle}</p>
      </Title>

      <Descriptions>
        <li>{descriptions.one}</li>
        <li>{descriptions.two}</li>
        <li>{descriptions.three}</li>
        <li>{descriptions.four}</li>
      </Descriptions>

      <Price>
        <Cur>{price.cur}</Cur>
        <Val>{price.val}</Val>
        <Per>{price.per}</Per>
        <Order href="#">Order</Order>
      </Price>
    </Card>
  )
}

export default Component
