import React from 'react';
import { Box, Link, Input, Button, Text } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { AiFillBoxPlot, AiOutlineSearch } from "react-icons/ai";


export const NavBar = () => {
  const navigate = useNavigate();

  return (

    <Box
      width={'100%'}
      boxShadow='dark-lg'
      bg={'#D8C378'}
      h={42}
      display='flex'
      justifyContent={'space-between'}
      alignContent='center'
      textAlign={'center'}
    >
      <Text
        fontFamily={'Jolly Lodger'}
        color='white'
        fontSize={23}
        ml={2}
        textAlign='center'
      >
        <Link pr={2} color='white' onClick={() => navigate('/', { replace: true })}>The birras Shop</Link>
      </Text>

      <Box
        display={'flex'}
        alignItems='center'
      >
        <Input
          w={'90%'}
          h='70%'
          color='white'
          bg='white'
          type={'text'}
        />
        <Button
          h='70%'
          bg={'blackAlpha.100'}
          variant='ghost'
          p={0}
        >
          <AiOutlineSearch />
        </Button>

      </Box>

      <Box
        display={'flex'}
        justifyContent='center'
        alignContent={'center'}
        alignItems='center'
        textAlign={'center'}
      >
        <Link pr={2} color='white' onClick={() => navigate('/contact', { replace: true })}>Login</Link>
        <Link pr={2} color='white' onClick={() => navigate('/', { replace: true })}>
          < FaShoppingCart />
        </Link>
      </Box>

    </Box>

  )
}
