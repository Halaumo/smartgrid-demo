
export const mediaQueryMobile  = (width: string) => (style: TemplateStringsArray | string) => `@media screen and (min-width: ${width}){ ${style} };`
export const mediaQueryDesctop = (width: string) => (style: TemplateStringsArray | string) => `@media screen and (max-width: ${width}){ ${style} };`
