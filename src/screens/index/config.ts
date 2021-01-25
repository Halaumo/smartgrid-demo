export default {
  designWidth: 1920,
  columns: 12,
  breakPoints: {
    base: {
      offset: 15,
      containerWidth: '1200px',
    },
    xl: {
      offset: 12,
      containerWidth: '1200px',
      mediaDesctop: '1199px', /* -> @media (max-width: 1199px) */
      mediaMobile: '1200px', /* -> @media (min-width: 1200px) */
    },
    lg: {
      offset: 12,
      containerWidth: '1200px',
      mediaDesctop: '991px',
      mediaMobile: '992px',
    },
    md: {
      offset: 9,
      containerWidth: '1200px',
      mediaDesctop: '767px',
      mediaMobile: '768px',
    },
    sm: {
      offset: 6,
      containerWidth: '1200px',
      mediaDesctop: '575px',
      mediaMobile: '576px',
    },
  },
}
