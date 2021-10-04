import React from 'react'
import { Image } from '@chakra-ui/image'
import {
    FormControl,
    FormLabel,
    Input,
    Button, 
    InputGroup,
    InputLeftElement} from "@chakra-ui/react"; 

function SearchInput() {
    return (
        <FormControl> 
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<Image src='./sc_icon.png' h="20px" w="20px" marginLeft="32px" marginTop="6px" />} />
                        <Input 
                        type="text"
                        w="395px" 
                        marginLeft="11px"
                        h="45px" 
                        color="white"
                        bgColor="#6670DF" 
                        borderRadius="23px"
                        borderWidth={0}
                        placeholder="Cari daerah"
                        />
                </InputGroup>     
        </FormControl>
    )
}

export default SearchInput
