import { css } from 'styled-components'

export const TYPOGRAPHY = css`
  html {
    font-size: 100%;
  } /*16px*/

  p {
    margin-bottom: 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: var(--font-display);
    font-weight: 400;
    line-height: 1.3;
  }

  h1 {
    margin-top: 0;
    font-size: 2.488rem;
  }

  h2 {
    font-size: 2.074rem;
  }

  h3 {
    font-size: 1.728rem;
  }

  h4 {
    font-size: 1.44rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  small,
  .text_small {
    font-size: 0.833rem;
  }
`
