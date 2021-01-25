import styled, { css } from 'styled-components'
import React, { FC, useState, useEffect } from 'react'
import FlexContainer from '../flexContainer'
import FlexRow from '../flexRow'
import FlexItem from '../flexItem'

interface styleProps {
  visible?: boolean
}

const Debug = styled.div<styleProps>(
  ({ visible }) => css`
    display: ${visible ? 'block' : 'none'};
    height: 100vh;
    position: fixed;
    width: 100%;
  `
)

const DebugContainer = styled(FlexContainer)`
  height: inherit;
`

const DebugFlexRow = styled(FlexRow)`
  height: inherit;
`

const DebugFlexItem = styled(FlexItem)`
  height: inherit;
  outline: 1px solid #ff0;
  background: rgba(0, 0, 0, 0.4);
`
interface props extends styleProps {
  pressedKey?: string
}

const DebugFlexItems: FC<{ count: number }> = ({ count }) => {
  const arr = new Array(count).fill(0)
  return (
    <>
      {arr.map((el, i) => (
        <DebugFlexItem key={i} baseSize={1} lgSize={1} mdSize={1} smSize={1} />
      ))}
    </>
  )
}

const Component: FC<props> = ({ visible = false, pressedKey = '`' }) => {
  const [isVisible, setIsVisible] = useState(visible)

  const toggleIsVisible = (event: KeyboardEvent) => {
    const { key } = event
    if (!(key === pressedKey)) return
    setIsVisible((prev) => !prev)
  }

  useEffect(() => {
    window.addEventListener('keydown', toggleIsVisible)

    return () => {
      window.removeEventListener('keydown', toggleIsVisible)
    }
  }, [isVisible])

  return (
    <Debug visible={isVisible}>
      <DebugContainer>
        <DebugFlexRow>
          <DebugFlexItems count={12} />
        </DebugFlexRow>
      </DebugContainer>
    </Debug>
  )
}

export default Component
