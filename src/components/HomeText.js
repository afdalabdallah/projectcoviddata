import React from 'react'
import {Grid, GridItem} from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

export default function HomeText() {
    return (
        <Grid
<<<<<<< HEAD
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
                <Text marginTop="8px" fontSize="13.48px" fontStyle="italic">23 Septermber 2021</Text>
            </GridItem>
=======
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
<<<<<<< HEAD
            <GridItem rowSpan={1.5} colSpan={2} fontSize="64pt" fontWeight="700">Data Terkini</GridItem>
            <GridItem marginTop="5%" rowSpan={3} colSpan={2} fontSize="60.78px" fontWeight="700" color="#FFF" borderRadius="100px" width="572px" h="103px" bgColor="#6670DF" textAlign="center">2.123.013 kasus</GridItem>
            <GridItem rowSpan={4} colSpan={2} fontSize="21.33pt">Jumlah kasus penyebaran Covid - 19 di <br/>Indonesia sampai saat ini</GridItem>
=======
            <GridItem rowSpan={2} colSpan={4} fontSize="64px" fontWeight="700">Data Terkini</GridItem>
            <GridItem marginLeft="5%" marginTop="5%" rowSpan={4} colStart={5} colEnd={8} fontSize="60.78px" fontWeight="700" color="#FFF" borderRadius="100px" bgColor="#6670DF" textAlign="center">2.123.013 kasus</GridItem>
            <GridItem rowStart={4} rowEnd={6}colSpan={3} fontSize="21.33pt">Jumlah kasus penyebaran Covid - 19 di <br/>Indonesia sampai saat ini</GridItem>
>>>>>>> 74747512f7f3243cf92f7519abf59e9a2f1686b2
            <GridItem rowSpan={2} colSpan={2}></GridItem> {/*kosong untuk spacing bawah*/}
            <GridItem rowStart={7} colSpan={2} fontSize="13.48pt" fontStyle="italic">23 Septermber 2021</GridItem>
>>>>>>> 49692c7c410f56995eee8604cafb5c6401a5f7bb
        </Grid>
    )
}
