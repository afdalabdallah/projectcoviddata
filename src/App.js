import { ChakraProvider } from "@chakra-ui/react"
import './App.css';
import ArtikelTitle from "./components/ArtikelTitle";
import Artikel from "./sections/Artikel";
import DataIndo from "./sections/DataIndo";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Navbar from "./sections/Navbar";
import Protokol from "./sections/Protokol";



function App() {
  return (
   <ChakraProvider>
      <Navbar/>
      <Home/>
      <DataIndo/>
      <Protokol/>
      <ArtikelTitle/>
      <Artikel/>
      <Footer/>
   </ChakraProvider>
  );
}

export default App;
