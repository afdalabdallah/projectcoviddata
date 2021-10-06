import React from 'react'
import {Grid, GridItem} from '@chakra-ui/react'

export default function HomeText() {
    return (
        <Grid
        w="80%"
        h="350px"
        templateRows="repeat(10, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={2}
        margin="auto"
        marginTop="5%"
        fontFamily="Montserrat"
        color="#545DCA"
            >
            <GridItem rowSpan={1.5} colSpan={2} fontSize="64pt" fontWeight="700">Data Terkini</GridItem>
            <GridItem marginTop="5%" rowSpan={3} colSpan={2} fontSize="60.78px" fontWeight="700" color="#FFF" borderRadius="100px" width="572px" h="103px" bgColor="#6670DF" textAlign="center">2.123.013 kasus</GridItem>
            <GridItem rowSpan={4} colSpan={2} fontSize="21.33pt">Jumlah kasus penyebaran Covid - 19 di <br/>Indonesia sampai saat ini</GridItem>
            <GridItem rowSpan={2} colSpan={2}></GridItem> {/*kosong untuk spacing bawah*/}
            <GridItem rowSpan={2} colSpan={2} fontSize="13.48pt" fontStyle="italic">23 Septermber 2021</GridItem>
        </Grid>
    )
}
