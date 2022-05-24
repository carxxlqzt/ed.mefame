import {  Routes,  Route} from "react-router-dom";
import React from "react";
import { ChakraProvider,Box } from "@chakra-ui/react";
import {Header} from './Components/Header'
import {NavbarMobile} from './Components/NavbarMobile'
import {NavbarLandscape} from './Components/NavbarLandScape'
import {Notas} from './Components/Notas'
import {Fanzines} from './Components/Fanzines'
import {NuestrasPropuestas} from './Components/NuestrasPropuestas'
import {Contact} from './Components/Contact'
import {Libros} from './Components/Libros'
import {navbarLinks} from './const/navbarLinks'

function App() { 
  const [landscape,setLandscape] = React.useState(window.matchMedia("(min-width: 770px)").matches)
  React.useEffect(()=>{
    console.log(landscape)
    const detectarLandscape = () => setLandscape((window.matchMedia("(min-width: 770px)").matches)
    )
    window.addEventListener('resize',detectarLandscape)
  })
  return (
  
    <Box className="App" width='100vw' h='100vh'>
      <ChakraProvider>
     
      
          <Box>
         
          <Header/>

        {landscape?<NavbarLandscape navbarLinks={navbarLinks}/>:<NavbarMobile  navbarLinks={navbarLinks}/>}

        <Routes> 
        <Route  path="/" element={<NuestrasPropuestas />}>
        
        
          
      </Route>
      <Route path="/Libros"  element={<Libros/>}>
       
        
      </Route>
      <Route path="/Fanzines" element={<Fanzines/>}>
        
        
      </Route>
       <Route path="/Notas" element={<Notas/>}>
        
        
      </Route>
      <Route path="/Contact" element={<Contact/>}>
      
      </Route>
       </Routes>
   </Box>
    
        
         </ChakraProvider>
    </Box>
  )

}

export default App;
