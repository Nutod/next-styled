import { GlobalStyles } from 'styles/global'

function MyApp({ Component, pageProps }) {
  //   console.log(ResetCSS)

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
