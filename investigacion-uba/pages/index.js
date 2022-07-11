import styles from '../styles/Home.module.css'
import { Box, Flex, Spacer, AspectRatio, Center } from "@chakra-ui/react"



export default function Home() {
  return (
    <AspectRatio>
      <iframe scrolling='no' m='auto' width="720px"
      src="https://docs.google.com/document/d/e/2PACX-1vTEi648s7U5jNcQza9yGkVsYefIYppovOfekibvQIZlkvZJboJDewFpSr1hHCWavCdwH3doFpCCjzw1/pub?embedded=true">
      </iframe>
    </AspectRatio>
  )
}

{/* <Box className="iframe" as="iframe" bg='teal' 
      w='720px' m='auto' scrolling="no"
      h="100%" border='none' pos='relative'
      src="https://docs.google.com/document/d/e/2PACX-1vTEi648s7U5jNcQza9yGkVsYefIYppovOfekibvQIZlkvZJboJDewFpSr1hHCWavCdwH3doFpCCjzw1/pub?embedded=true">
      </Box> */}
