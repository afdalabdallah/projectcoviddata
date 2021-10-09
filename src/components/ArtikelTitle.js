import { Box, Text } from '@chakra-ui/layout'
import { Flex } from '@chakra-ui/react';
import "@fontsource/montserrat";
import React from 'react'

function ArtikelTitle() {
    return (
        <Flex>
             <Box paddingLeft="102" id="artikeltitle">
                <Text 
                fontSize="72" 
                fontFamily="Montserrat" 
                fontWeight="bold" 
                color="#F57A3F"
                marginTop="200"
                marginBottom="50">
                    Artikel & Video
                </Text>
            </Box>
        </Flex>
      
    )
}

export default ArtikelTitle
