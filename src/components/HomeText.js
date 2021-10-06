import React from 'react'
import {Grid, GridItem} from '@chakra-ui/react'

export default function HomeText() {
    return (
        <Grid
        w="90%"
        h="350px"
        templateRows="repeat(10, 1fr)"
        templateColumns="repeat(8, 1fr)"
        gap={2}
        marginLeft="auto"
        marginTop="5%"
        fontFamily="Montserrat"
        color="#545DCA"
            >
            <GridItem rowSpan={2} colSpan={4} fontSize="64px" fontWeight="700">Data Terkini</GridItem>
            <GridItem marginLeft="5%" marginTop="5%" rowSpan={4} colStart={5} colEnd={8} fontSize="60.78px" fontWeight="700" color="#FFF" borderRadius="100px" bgColor="#6670DF" textAlign="center">2.123.013 kasus</GridItem>
            <GridItem rowStart={4} rowEnd={6}colSpan={3} fontSize="21.33pt">Jumlah kasus penyebaran Covid - 19 di <br/>Indonesia sampai saat ini</GridItem>
            <GridItem rowSpan={2} colSpan={2}></GridItem> {/*kosong untuk spacing bawah*/}
            <GridItem rowStart={7} colSpan={2} fontSize="13.48pt" fontStyle="italic">23 Septermber 2021</GridItem>
        </Grid>
    )
}
