import { createGlobalStyle } from 'styled-components'
import { reset } from './reset'
import { elements } from './elements'

export const GlobalStyles = createGlobalStyle`
  ${reset}

  ${elements}
`
