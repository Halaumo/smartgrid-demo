import React, { FC } from 'react'
import styled from 'styled-components'

const Human = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Image = styled.img`
  margin: 10px auto;
  width: 90%;
`

const Title = styled.p`
  color: #222;
  font-size: 24px;
  margin: 10px;
`
const Job = styled.p`
  margin: auto 10px 10px 10px;
  font-size: 14px;
`
const Follow = styled.p`
  background: #6cc372;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  border-radius: 5px;
  padding: 5px;
`
interface props {
  imageSrc: string
  title: string
  job: string
  follow: string
}
const Component: FC<props> = ({ imageSrc, title, job, follow }) => {
  return (
    <Human>
      <Image src={imageSrc} />
      <Title>{title}</Title>
      <Job>{job}</Job>
      <Follow>{follow}</Follow>
    </Human>
  )
}

export default Component
