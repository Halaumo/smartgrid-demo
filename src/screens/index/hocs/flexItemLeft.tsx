import styled, { css } from 'styled-components'
import { flexItemSize } from '@/shared/smartgrid/flexItem'
import { mediaQueryLg, mediaQueryMd, mediaQuerySm } from './mediaQueries'

import config from '../config'

interface props {
  baseSize: number
  lgSize: number
  mdSize: number
  smSize: number
}

const FlexItemLeft = styled.div<props>(
  ({ baseSize, lgSize, mdSize, smSize }) => css`
    word-wrap: break-word;
    ${flexItemSize(config.columns, baseSize)}
    /* margin-left: 1rem; */

    ${mediaQueryLg(`
      ${flexItemSize(config.columns, lgSize)}
    `)}

    ${mediaQueryMd(`
      ${flexItemSize(config.columns, mdSize)}
    `)}

    ${mediaQuerySm(`
      ${flexItemSize(config.columns, smSize)}
    `)}
  `
)

export default FlexItemLeft
