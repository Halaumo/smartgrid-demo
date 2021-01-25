import React, { FC } from 'react'
import styled from 'styled-components'

const Portfolio = styled.div`
  text-align: center;
`

const Image = styled.img`
  margin: 10px auto;
  width: 100%;
`

const Description = styled.p`
  color: #000;
  font-size: 20px;
`

interface props {
  imageSrc: string
  description: string

}
const Component: FC<props> = ({ imageSrc, description }) => {
  return (
    <Portfolio>
      <Image src={imageSrc} />
      <Description>{description}</Description>
    </Portfolio>
  )
}

export default Component
