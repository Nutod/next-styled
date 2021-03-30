import { createGlobalStyle } from 'styled-components'
import { RESET } from './reset'
import { ELEMENTS } from './elements'
import { CRITICAL } from './critical'

export const GlobalStyles = createGlobalStyle`
  ${'' /* Reset all CSS styles to make things more consistent */}
  ${RESET}

  ${'' /* Mostly global variables here */}
  ${CRITICAL}

  ${ELEMENTS}
`
