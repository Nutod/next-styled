import { createGlobalStyle } from 'styled-components'
import { reset } from './reset'
import { ELEMENTS } from './elements'
import { CRITICAL } from './critical'

export const GlobalStyles = createGlobalStyle`
  ${reset}
  ${CRITICAL}
  ${ELEMENTS}
`
