import { Box, Text } from '@chakra-ui/layout'
import "@fontsource/montserrat";
import React from 'react'

function ArtikelTitle() {
    return (
       <Box paddingLeft="102" id="artikeltitle">
           <Text 
           fontSize="72" 
           fontFamily="Montserrat" 
           fontWeight="extrabold" 
           color="#F57A3F"
           marginTop="200"
           marginBottom="50">
               Artikel & Video
            </Text>
       </Box>
    )
}

export default ArtikelTitle
