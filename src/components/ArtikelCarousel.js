import React, { Component, useState } from "react";
import { Box, Center, Image, Text, VStack, StackItem, Stack } from "@chakra-ui/react";
import dataArtikel from "../DataArtikel/DataDummy";
import Slider from "react-slick";
import "@fontsource/montserrat";


export default function Responsive() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      arrows: true,
      useCSS: true,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    var boxstyle = {
      height: '353px',
      width: '346px',
      padding: '10px',
      backgroundColor: 'white',
      borderRadius: '26px',
      marginLeft: '70px'
    };

    var innerBox = {
      width: '301px',
      height: '184px',
      backgroundColor: 'white',
      borderRadius: '26px'
    };

    var detailBox = {
      height: '44px',
      width: '301px',
      backgroundColor: '#F57A3F',
      borderRadius: '75px',
      marginTop: '12px',
      padding:'10px',
      cursor: 'pointer'
    }

    var titleStyle = {
      fontSize: '16px',
      fontFamily: 'Montserrat',
      fontWeight: 'bold',
      color:"#E77C48"
    }

    var detailStyle = {
      fontSize:"16", 
      fontFamily:"Montserrat", 
      fontWeight:"bold" ,
      color:"white",
    }
    return (
      <div>
        {/* <h2> Responsive </h2> */}
        <Slider {...settings}>
          {/* <FaArrowAltCircleLeft /> */}
          {dataArtikel.map((dataArtikel, index) => (
              <div key={index}>
                  <Box style={boxstyle}>
                    <Center>
                      <VStack width={301}>
                          <StackItem>
                            <Box style={innerBox}>
                                <Image src={dataArtikel.image} style={innerBox} alt={dataArtikel.alt}/>
                            </Box>
                         </StackItem>
                        <StackItem>
                          <Text style={titleStyle}>
                            {dataArtikel.title}
                          </Text>
                        </StackItem>
                        <StackItem>
                          <a href = {dataArtikel.link} target={'_blank'}>
                          <Box style={detailBox} >
                              <Text style={detailStyle} align={'center'}>
                                Lihat selengkapnya
                              </Text>
                          </Box>
                          </a>
                        </StackItem>
                      </VStack>
                    </Center>
                  </Box>
              </div>
          ))}
        </Slider>
      </div>
    );
  
}