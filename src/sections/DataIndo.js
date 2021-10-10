import { Box, Center, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import LineGraph from '../components/LineGraph'
import LineRechart from '../components/LineRechart'
import NegatifCard from '../components/NegatifCard'
import PositifCard from '../components/PositifCard'

function DataIndo() {
    return (
        <Box height="556px" bgColor="#FFD6C3" marginBottom={180}>
            <Grid
            templateColumns="repeat(3, 527px)"
            templateRows="repeat(5, 111px)"
            >
                <GridItem rowSpan={2} colSpan={1}>
                    <PositifCard/>
                </GridItem>
                <GridItem rowSpan={2} colSpan={1}>
                    <NegatifCard/>
                </GridItem>
                <GridItem rowSpan={2} colSpan={1}>
                    <PositifCard />
                </GridItem>
                <GridItem rowSpan={3} colSpan={2} paddingLeft="85px">
                        <Box marginTop="24px">
                            <LineGraph casesType="cases" deathCases="deaths" recCases="recovered"/>
                            {/* <LineRechart casesType="cases" /> */}
                        </Box>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default DataIndo
