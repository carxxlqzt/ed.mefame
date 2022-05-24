import React from 'react'
import {Box,Image, Text} from '@chakra-ui/react'
import EDMEFAME from '../public/MEFAME.ICONO.PALABRA.png'
export const Header = () => {
  return (
<Box width='100vw' bg='white' m='1' display='flex' flexDirection='row' h='14vh' justifyContent='flex-start' >
 <Box  h='95%'bg='transparent'  display='flex' flexDirection='row' alignItems='flex-end' marginLeft='2rem' >
    <Box p='2' bg='black' height='5rem' width='16rem' backgroundImage={EDMEFAME} backgroundPosition='center'  backgroundSize='cover'>
     
    </Box>
    <Box bg="white" marginLeft='4rem'  >
      <Text color='black' fontSize='md' marginBottom='1rem'>Producción de conocimientos no-convencionales</Text ></Box>
 </Box>
</Box>
    )
}
