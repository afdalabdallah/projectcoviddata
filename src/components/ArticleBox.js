import React from 'react'
import { Box, Stack, Button } from '@chakra-ui/react';

export default function ArticleBox({text, id}) {
    return (
        <Box id={id} position="relative" bg="#FFFFFF" borderRadius="30px" w="350px" h="350px" justifyContent="center" ml={id == 1 ? null : "50px"}>
            <Stack top="5" align="center" pos="relative" direction="column"  w="100%" h="90%">
                <Box fontFamily="Montserrat" bg="#F57A3F" w="90%" h="50%" borderRadius="30px"></Box>
                <Box fontFamily="Montserrat" fontWeight="bold" fontSize="18px" color="#F57A3F" w="90%" h="30%" borderRadius="20px">{text}</Box>
                <Button fontFamily="Montserrat" fontWeight="bold" fontSize="18px" color="#FFFFFF" bg="#F57A3F" w="90%" h="20%" borderRadius="100px">Lihat Selengkapnya</Button>
            </Stack>
        </Box>
    )
}
