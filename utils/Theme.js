// theme.js
// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react"
// 2. Add your color mode config
const customTheme = {
  initialColorMode: "light",
  useSystemColorMode: false,

  fonts: {
    heading: '"Space Mono", monospace',
    body: '"Space Mono", monospace',
    mono: '"Space Mono", monospace',
    Text: '"Space Mono", monospace',
  },
}
// 3. extend the theme
const theme = extendTheme({ customTheme })
export default theme;