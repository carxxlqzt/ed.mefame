import React from 'react'
import {Fanzines1} from '../const/Libros.js'
import {Box,Text,Image, Container} from '@chakra-ui/react'

export const Fanzines = () => {
  return (
    <Container marginTop='4rem'  h='100vh'maxW='3xl'>
    <Box w='95%' height='100%' display='flex' flexDirection='row' justifyContent='space-around' flexWrap='wrap'>     
       {Fanzines1.map((item)=>{
           return( 
              <Box width='29%' height='45%' p='1rem' border='solid' border-color='black'  display='flex' flexDirection='column' >
                         <Box   h='12rem' w='10rem' backgroundImage={item.url} backgroundPosition='center'  backgroundSize='cover'></Box>
                          <Text>{item.title} </Text>
                 </Box>)
       })}
       

        </Box>

  </Container>
  )
}
