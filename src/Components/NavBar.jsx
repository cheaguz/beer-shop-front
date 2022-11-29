import React from 'react';
import { Box,Link,  } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
  const navigate = useNavigate();
 
  return (
    
        <Box
         width={'100%'}
         boxShadow='dark-lg'
         bg={'orange.200'}
         display='flex'
         justifyContent={'space-between'}
         
         >
            <span>The birras Shop</span>  
        
              <input type={'text'}/>
              <div>
              <Link onClick={()=> navigate('/contact',{replace:true}) }>Contacto</Link>
              <Link onClick={()=> navigate('/',{replace:true}) }>Home</Link>
              
              </div>
              
           
        </Box>
    
  )
}
