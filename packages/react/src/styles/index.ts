import { createStitches, defaultThemeMap } from '@stitches/react'
import {
  colors,
  fontSizes,
  fontWeights,
  radii,
  space,
  fonts,
  lineHeights,
} from '@ignite-ui/tokens'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    // use space tokens, by default is only used in padding and margin
    height: 'space',
    width: 'space',
  },

  theme: {
    colors,
    fontSizes,
    fontWeights,
    radii,
    space,
    fonts,
    lineHeights,
  },
})
