import React from 'react'
import {Grid, GridItem} from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

export default function HomeText() {
    return (
        <Grid
        w="80%"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={2}
        margin="auto"
        marginTop="1%"
        fontFamily="Montserrat"
        color="#545DCA"
            >
            <GridItem rowSpan={1} colSpan={1} >
                <Text fontSize="64px" fontWeight="700">
                    Data Terkini
                </Text>
            </GridItem>
            <GridItem marginTop="3%" rowSpan={2} colSpan={1}   borderRadius="100px" bgColor="#6670DF" textAlign="center" w="572px" h="103px">
               <Text marginTop="4px" fontSize="60.78px" fontWeight="bold" color="#FFF">
                   2.123.013 kasus
                </Text>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} fontSize="21.33px">
                Jumlah kasus penyebaran Covid - 19 di 
                <br/>
                Indonesia sampai saat ini
                <br/>
                <Text marginTop="8px" fontSize="13.48px" fontStyle="italic">23 September 2021</Text>
            </GridItem>
        </Grid>
    )
}
