import { flexItem, flexItemSize } from '@/shared/smartgrid/flexItem'
import styled, { css } from 'styled-components'
import { mediaQueryLg, mediaQueryMd, mediaQuerySm } from './mediaQueries'
import config from '../config'

interface props {
  baseSize: number
  lgSize: number
  mdSize: number
  smSize: number
}

const FlexItem = styled.div<props>(({ baseSize, lgSize, mdSize, smSize }) => css`
  word-wrap: break-word;

  ${flexItem()}
  ${flexItemSize(config.columns, baseSize)}

  ${mediaQueryLg(`
    ${flexItemSize(config.columns, lgSize)}
  `)}

  ${mediaQueryMd(`
    ${flexItemSize(config.columns, mdSize)}
  `)}

  ${mediaQuerySm(`
    ${flexItemSize(config.columns, smSize)}
  `)}
`)

export default FlexItem
