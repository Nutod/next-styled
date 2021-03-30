import { createGlobalStyle } from 'styled-components'
import { reset } from './reset'
import { ELEMENTS } from './elements'
import { critical } from './critical'

export const GlobalStyles = createGlobalStyle`
  ${reset}
  ${critical}
  ${ELEMENTS}
`
