import React from 'react'
import {Box,Button} from '@chakra-ui/react'
import {Link} from 'react-router-dom'

export const NavbarLandscape = ({navbarLinks}) => {
  return (
    <Box width='100vw' h='5vh' bg='black' display='flex' flexDirection='row' justifyContent='center' > 
    <Box width='40%' display='flex' flexDirection='row' justifyContent='space-between' >
          {navbarLinks.map((item, index) => {
          return (
            
              <Button size='sm' color='white' key={index} bg="transparent" _hover={{ bg: 'white',color:'black'}}
              >
                <Link color='white' to={'/'+ item.url}>   {item.title}</Link>
              </Button>
           
          );
        })}
        </Box>
    </Box>
  )
}
