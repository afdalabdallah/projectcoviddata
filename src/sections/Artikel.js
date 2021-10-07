import React, { useState } from 'react'
import { Flex, IconButton } from '@chakra-ui/react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import ArticleBox from '../components/ArticleBox'

function Artikel({text, id}) {
    const [items, setItems] = useState([]);

    var text = "Hebat! Indonesia";
    var idx = 1;

    for(var i = 0; i < 4; i++){
        items[i] = {
            text: {text}
        }
    }

    return ( 
        <Flex position="relative" id="artikel" height="400px" bgColor="#FFD6C3" marginBottom="200" zIndex="-1">
            <Flex w="100%" mt={5} mb={5}>
                <IconButton ml="4px" margin="auto" borderRadius="50px" icon={<FaChevronLeft color="#FFFFFF" size={75}/>} bgColor="black" width="100px" height="100px"/>
                {items.map(() => (
                    <ArticleBox
                        text={text}
                        id={idx++}
                    />
                ))}
                <IconButton ml="50px" margin="auto" borderRadius="50px" icon={<FaChevronRight color="#FFFFFF" size={75}/>} bgColor="black" width="100px" height="100px"/>
            </Flex>
        </Flex>
    );
}

export default Artikel
