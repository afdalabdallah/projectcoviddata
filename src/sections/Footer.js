import React from 'react'
import { Box, StackItem, HStack } from '@chakra-ui/react'
import { Image } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react" 
import HelpInfo from '../components/HelpInfo'

function Footer() {
    return (
        <Box bgColor="#EBEDFF" height="334px" paddingTop="72px" paddingLeft="64px">
                <HStack
                spacing="780px"
                >
                    <StackItem>
                        <HelpInfo/>
                    </StackItem>
                    <StackItem>
                        <Image cursor="pointer" src='./LOGO_1.png' />
                    </StackItem>

                </HStack>
            </Box> 
    )
}

export default Footer
