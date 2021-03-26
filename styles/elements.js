import { css } from 'styled-components'

export const elements = css`
  button {
    color: var(--btn-clr, var(--textColor));
    background: var(--btn-bg-clr, var(--color-primary));
    border: none;
    border-radius: 2px;
    padding: 11px 30px;
    cursor: pointer;
    box-shadow: var(--elevation-two);
    transition: all 0.2s;

    &:hover {
      box-shadow: var(--elevation-three);
    }

    ${'' /* &:focus {
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    } */}

    &:active {
      transform: translateY(1px);
    }
  }

  .bg-green {
    --btn-bg-clr: green;
    --btn-clr: white;
  }

  .bg-pink {
    --btn-bg-clr: pink;
    --btn-clr: white;
  }

  a {
    text-decoration: none;
    color: var(--textColor);
    border-bottom: 2px solid var(--color-primary);
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.6;
      color: var(--color-primary);
    }

    &:focus {
      outline: 2.5px dotted var(--color-secondary);
    }
  }
`
