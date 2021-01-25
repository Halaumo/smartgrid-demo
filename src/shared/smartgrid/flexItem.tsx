/** additional styles:
 * word-wrap: break-word;
 * */
export const flexItem = () => `
  margin-left: 1rem;
  margin-right: 1rem;
`

export const flexItemSize = (columns: number, size: number) => `
  width: calc(${100 / columns * size}% - 2rem);
`
