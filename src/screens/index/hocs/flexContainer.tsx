import flexContainer from '@/shared/smartgrid/flexContainer'
import styled from 'styled-components'
import config from '../config'

const { base } = config.breakPoints

const Container = styled.div`
  margin: 0 auto;
  max-width: ${base.containerWidth};
  ${flexContainer()}
`

export default Container
