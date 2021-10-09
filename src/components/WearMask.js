import { Box, Center,VStack, StackItem } from '@chakra-ui/layout'
import { Image, Text } from '@chakra-ui/react'
import React from 'react'

function WashHand() {
    return (
        <VStack>
            <StackItem>
                <Box borderRadius="50%" bgColor="white" w="152px" h="152px">
                    <Center>
                        <Image src='./WEAR_MASK.png' alt="memakai_masker" w="123px" h="123px" marginTop="15px"/>
                    </Center>
                </Box>
            </StackItem>
            <StackItem>
                <Center>
                    <Text fontFamily="Montserrat" fontSize="20px" color="#6670DF" fontWeight="medium">
                        Memakai masker
                    </Text>
                </Center>
            </StackItem>
        </VStack>
      
    )
}

export default WashHand
