import { mediaQueryDesctop } from '@/shared/smartgrid/mediaQueries'
import config from '../config'

export const mediaQueryLg = mediaQueryDesctop(config.breakPoints.lg.mediaDesctop)
export const mediaQueryMd = mediaQueryDesctop(config.breakPoints.md.mediaDesctop)
export const mediaQuerySm = mediaQueryDesctop(config.breakPoints.sm.mediaDesctop)
