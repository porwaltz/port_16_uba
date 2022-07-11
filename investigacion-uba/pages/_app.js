import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ChakraProvider>
        <Component {...pageProps}/>
      </ChakraProvider>
    </>
  )
}

export default MyApp
