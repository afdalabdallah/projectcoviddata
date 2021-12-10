import { ChakraProvider } from "@chakra-ui/react"
import './App.css';
import ArtikelTitle from "./components/ArtikelTitle";
import Artikel from "./sections/Artikel";
import DataIndo from "./sections/DataIndo";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Navbar from "./sections/Navbar";
import Protokol from "./sections/Protokol";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'


function App() {
  return (
   <ChakraProvider>
     <Box w="1583px">
        <Navbar/> 
        <Home/>
        <DataIndo/>
        <Protokol/>
        <ArtikelTitle/>
        <Artikel/>
        <Footer/>
     </Box>
   </ChakraProvider>
  );
}

export default App;
