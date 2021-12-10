import React, { useState } from 'react'
import { Flex, IconButton, Box } from '@chakra-ui/react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import ArticleBox from '../components/ArticleBox'
import ArtikelCarousel from '../components/ArtikelCarousel';

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
        <Box id="artikel" height="400px" bgColor="#FFD6C3" marginBottom="200" paddingTop={5} paddingLeft={10} paddingRight={10}>
            <ArtikelCarousel/>
        </Box>
    );
}

export default Artikel
