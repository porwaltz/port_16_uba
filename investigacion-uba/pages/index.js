import styles from '../styles/Home.module.css'
import { Box, Flex, Spacer, AspectRatio, Center } from "@chakra-ui/react"



export default function Home() {
  return (
    <Center bg='teal'height='fit-content'>
      <Box className="iframe" as="iframe" bg='red' width='720px' m='auto' scrolling="no"
      
      src="https://docs.google.com/document/d/e/2PACX-1vTEi648s7U5jNcQza9yGkVsYefIYppovOfekibvQIZlkvZJboJDewFpSr1hHCWavCdwH3doFpCCjzw1/pub?embedded=true">
      </Box>
    </Center>
  )
}
