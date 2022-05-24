import React from 'react'
import {Libros1} from '../const/Libros.js'
import {Box,Text,Image, Container} from '@chakra-ui/react'
export const Libros = () => {
  return (
    <Container marginTop='4rem' maxW='3xl'display='flex' flexDirection='row' justifyContent='center'>
      <Box w='95%' height='100%' display='flex' flexDirection='row' justifyContent='space-around' >     
         {Libros1.map((item)=>{
             return( 
                <Box width='29%' height='12%' p='1rem' border='solid' border-color='black'>
                     <Image src={item.url} ></Image>
                            <Text>{item.title} </Text>
                   </Box>)
         })}
         

          </Box>

    </Container>
  )
}
