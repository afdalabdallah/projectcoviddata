import { Box, HStack, StackItem, Text } from '@chakra-ui/layout'
import { Center } from '@chakra-ui/react'
import "@fontsource/montserrat";
import { Image } from "@chakra-ui/react"
import React from 'react'

function HelpInfo() {
    return (
        <Box>
            <Box width="261px" height="47px" bgColor="white" borderRadius="24px">
                <Center>
                    <Text fontSize="25"
                     color="#545DCA" 
                     marginTop="1"
                     fontFamily="Montserrat"
                     fontWeight="bold">
                        Perlu Bantuan?
                    </Text>
                </Center>
            </Box>
            <HStack
            marginTop="24px"
            spacing="30px">
                <StackItem cursor="pointer" onClick={()=>{window.open("https://www.instagram.com/afdalabdallah/")}}>
                    <Box height="69px" width="69px" bgColor="#6670DF" borderRadius="50">
                        <Center>
                            <Image marginTop="14px" src='./ig_icon.png'/>
                        </Center>  
                    </Box>
                </StackItem>
                <StackItem cursor="pointer">
                    <Box height="69px" width="69px" bgColor="#6670DF" borderRadius="50">
                        <Center>
                            <Image marginTop="14px" src='./wa_icon.png'/>
                        </Center>  
                    </Box>
                </StackItem>
                <StackItem cursor="pointer">
                    <Box height="69px" width="69px" bgColor="#6670DF" borderRadius="50" onClick={()=>{window.open("https://twitter.com/afdalabdallahm")}}>
                        <Center>
                            <Image marginTop="19px" src='./tw_icon.png'/>
                        </Center>  
                    </Box>
                </StackItem>
                <StackItem cursor="pointer" >
                    <Box height="69px" width="69px" bgColor="#6670DF" borderRadius="50">
                        <Center>
                            <Image marginTop="16px" src='./fb_icon.png'/>
                        </Center>  
                    </Box>
                </StackItem>
            </HStack>
        </Box>
    )
}

export default HelpInfo
