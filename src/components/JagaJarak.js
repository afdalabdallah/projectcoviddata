import { Box, Center,VStack, StackItem } from '@chakra-ui/layout'
import { Image, Text } from '@chakra-ui/react'
import React from 'react'

function WashHand() {
    return (
        <VStack>
            <StackItem>
                <Box borderRadius="50%" bgColor="white" w="152px" h="152px">
                    <Center>
                        <Image src='./KEEP_DISTANCE.png' alt="menjaga_jarak" w="123px" h="123px" marginTop="15px"/>
                    </Center>
                </Box>
            </StackItem>
            <StackItem>
                <Center>
                    <Text fontFamily="Montserrat" fontSize="20px" color="#6670DF" fontWeight="medium">
                        Menjaga jarak
                    </Text>
                </Center>
            </StackItem>
        </VStack>
      
    )
}

export default WashHand
