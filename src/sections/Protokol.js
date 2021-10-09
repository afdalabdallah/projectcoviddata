import { Box, HStack, StackItem, Image } from '@chakra-ui/react'
import React from 'react'
import ProtokolTitle from '../components/ProtokolTitle'
import WashHand from '../components/WashHand'
import WearMask from '../components/WearMask'
import JagaJarak from '../components/JagaJarak'

function Protokol() {
    return (
        <HStack 
        id="protokol" 
        height="444px" 
        bgColor="#EBEDFF"
        justifyContent="space-between"
        padding="0 102px 0 102px">
            <StackItem>
                <ProtokolTitle/>
            </StackItem>
            <StackItem>
                <WashHand/>
            </StackItem>
            <StackItem>
                <WearMask/>
            </StackItem>
            <StackItem>
                <JagaJarak/>
            </StackItem>
        </HStack>
      
    )
}

export default Protokol
