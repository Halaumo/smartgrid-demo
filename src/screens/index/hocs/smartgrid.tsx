import { createGlobalStyle } from 'styled-components'
import config from '../config'
import { mediaQueryLg, mediaQueryMd, mediaQuerySm } from './mediaQueries'

const { base, lg, md, sm } = config.breakPoints

const SmartGrid = createGlobalStyle`
  html {
    font-size: ${base.offset}px;
  }

  ${mediaQueryLg(`
    html {
      font-size: ${lg.offset}px;
    }
  `)}

  ${mediaQueryMd(`
    html {
      font-size: ${md.offset}px;
    }
  `)}

  ${mediaQuerySm(`
    html {
      font-size: ${sm.offset}px;
    }
  `)}
`

export default SmartGrid
