import React from 'react';
import { Box, Container, Heading, Button } from '@chakra-ui/react'
import { AiFillHeart } from 'react-icons/ai';

import Logo from '../assets/logo.svg'

interface Props {
  title: string;
}

export default function Header({ title }: Props) {
  return(
    <Box
      bgGradient="linear(to-b, #FF8E0E, #FFB867)"
      w="100%"
      h="250px"
      pt="20px"
      pb="50"
      display="flex"
      flexDir="column"
      justifyContent="space-between"
    >
      <Container maxW="1000px" display="flex" alignItems="center" justifyContent="space-between" >
        <Logo />
        <Button
          colorScheme="transparent"
          bgColor="white.1000"
          leftIcon={<AiFillHeart />}
          _hover={{ bgColor: "transparent" }}
          _focus={{ }}
        >
          Favoritos
        </Button>
      </Container>

      <Heading
        color="white.500"
        lineHeight="1"
        textAlign="center"
        fontSize={["25px", "30px", "40px"]}
      >
        {title}
      </Heading>

    </Box>
  );
}