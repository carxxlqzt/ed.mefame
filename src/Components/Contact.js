import React from 'react'
import {Box,Container,Text} from '@chakra-ui/react'
import {AiFillInstagram,AiFillYoutube} from 'react-icons/ai'
export const Contact = () => {
  return (
    <Container maxW='3xl' marginTop='4rem'>
      <Text fontSize='2xl'>Contacto</Text>
      <Text>Si quieres ponerte en contacto con Editorial MEFAME, envíanos un correo electrónico a <a href="mailto:mefame.apoyomutuo@gmail.com">mefame.apoyomutuo@gmail.com</a>. También puedes visitar nuestras redes sociales</Text>
      <Box display='flex' flexDirection='row' justifyContent='space-between' marginTop='2rem'>
        
   <a href='https://www.instagram.com/mefame_editorial/'> <Box   w='9rem' h='7rem' cursor='pointer' display='flex' flexDir='row' justifyContent='center' alignItems='center' border='solid' borderColor='black' borderRadius='1rem' ><AiFillInstagram  size={50}/></Box></a>  
   <a href='https://www.youtube.com/channel/UCKjvUx-QUmnwkJWNfP4vrWQ'> <Box   w='9rem' h='7rem' cursor='pointer' display='flex' flexDir='row' justifyContent='center' alignItems='center' border='solid' borderColor='black' borderRadius='1rem'> <AiFillYoutube size={50}/></Box></a>  
</Box>

     
   
    </Container>
  )
}
