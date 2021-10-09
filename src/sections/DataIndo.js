import { Box, Center, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import LineGraph from '../components/LineGraph'

function DataIndo() {
    return (
        <Box height="556px" bgColor="#FFD6C3" marginBottom={180}>
            <Grid
            templateColumns="repeat(3, 527px)"
            templateRows="repeat(5, 111px)"
            >
                <GridItem rowSpan={2} colSpan={1}>
                    tes
                </GridItem>
                <GridItem rowSpan={2} colSpan={1}>
                    tes
                </GridItem>
                <GridItem rowSpan={2} colSpan={1}>
                    tes
                </GridItem>
                <GridItem rowSpan={3} colSpan={2} paddingLeft="85px">
                        <Box width="550px" >
                            <LineGraph casesType="cases" />
                        </Box>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default DataIndo
