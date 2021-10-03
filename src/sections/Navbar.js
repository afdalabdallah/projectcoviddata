import { Box, Text } from '@chakra-ui/layout'
import React, {useRef} from 'react'
import {scroller} from 'react-scroll'

function Navbar() {
    

    return (
        <Box height="109" bgColor="#EBEDFF" className="navbar">
            <Text cursor="pointer">Artikel</Text>
        </Box>
    )
}

export default Navbar
