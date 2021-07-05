import React from 'react';
import Link from 'next/link'
import { Box, Container, Heading, Button } from '@chakra-ui/react'
import { IoMdArrowBack } from 'react-icons/io';
import { AiFillHeart } from 'react-icons/ai';

import Logo from '../assets/logo.svg'

interface Props {
  title: string;
  buttonTitle: string
  linkPage: string;
  type: 'back' | 'favorite';
}

const icons = {
  back: <IoMdArrowBack size={24} />,
  favorite: <AiFillHeart size={19} />,
}


export default function Header({ title, buttonTitle, linkPage, type }: Props) {
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
      <Container type={type} maxW="1000px" display="flex" alignItems="center" justifyContent="space-between" >
        <Link href="/">
          <Logo />
        </Link>
        <Link href={linkPage}>
          <Button
            colorScheme="transparent"
            bgColor="white.1000"
            fontSize="18px"
            leftIcon={icons[type]}
            _hover={{ bgColor: "transparent" }}
            _focus={{ }}
          >
            {buttonTitle}
          </Button>
        </Link>
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