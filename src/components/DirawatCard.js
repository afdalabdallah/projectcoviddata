import React, {useEffect, useState} from 'react'
import { Box, Center, Text } from  '@chakra-ui/react'
import "@fontsource/montserrat";

function DirawatCard() {
    const [covid, setCovid] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://apicovid19indonesia-v2.vercel.app/api/indonesia");
            const data = await response.json();
            setCovid(data);
            // console.log(data);     
        };
        fetchData();
    }, []);
    var detailStyle = {
        fontSize:"36px", 
        fontFamily:"Montserrat", 
        fontWeight:"bold" ,
        color:"#545DCA",
    }
    // var int = covid.sembuh.toLocaleString();
    return (
        <Center>
            <Box w="338px" h="182px" bgColor="white" borderRadius="36px" marginTop="36px">
                <Box w="316px" h="156px" borderRadius="36px" borderColor="#F57A3F" borderWidth="3px" marginTop="13px" marginLeft="11px">
                    <Text
                    marginTop={8}
                    style={detailStyle}
                    align={'center'}>
                        {covid.dirawat}
                    </Text>
                    <Text 
                    fontFamily={'Montserrat'}
                    color={"#545DCA"}
                    align={'center'}
                    fontSize={14}>Jumlah Dirawat
                    </Text>
                </Box>
            </Box>
        </Center>
     
    )
}

export default DirawatCard
