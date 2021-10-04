import { Box } from '@chakra-ui/layout'
import React from 'react'
import HomeText from '../components/HomeText'
import IndonesiaMap from '../components/IndonesiaMap'

function Home() {
    return (
       <Box height={720} id="home" w="100%" bgColor="#FFFFFF">
           <HomeText/>
           <IndonesiaMap/>
       </Box>
    )
}

export default Home
