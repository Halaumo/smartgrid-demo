import styled, { css } from 'styled-components'
import { flexItemSize, flexItem } from '@/shared/smartgrid/flexItem'
import config from '../config'
import { mediaQueryLg, mediaQueryMd, mediaQuerySm } from './mediaQueries'

interface props {
  baseSize: number
  lgSize: number
  mdSize: number
  smSize: number
}

const FlexItemRight = styled.div<props>(
  ({ baseSize, lgSize, mdSize, smSize }) => css`
    word-wrap: break-word;
    width: calc(${(100 / config.columns) * baseSize}%);

    ${mediaQueryLg(`
      ${flexItem()}
      ${flexItemSize(config.columns, lgSize)}
    `)}

    ${mediaQueryMd(`
      ${flexItem()}
      ${flexItemSize(config.columns, mdSize)}
    `)}

    ${mediaQuerySm(`
      ${flexItem()}
      ${flexItemSize(config.columns, smSize)}
    `)}
  `
)

export default FlexItemRight
