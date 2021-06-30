import React, { useState } from 'react';
import { Box, Container, Stack, Image, Text, IconButton, useToast } from '@chakra-ui/react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface CharacterProps {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string,
  };
  image: string;
}

export default function Card({id, name, status, species, type, gender, origin, image }: CharacterProps) {
  const [addFavorites, setAddFavorites] = useState(false)
  const toast = useToast();

  function handleAddFavorites() {
    setAddFavorites(!addFavorites);
    toast({
      description: "Adicionado a lista de favoritos",
      status: "success",
      position: "top-right",
      duration: 3000,
      isClosable: true,
    })
  }

  return(
    <Container key={id} maxW="700px" px="20px" mb="15px">
      <Box
        w="100%"
        bgColor="white.500"
        borderRadius="5px"
        p="20px"
        display="flex"
        align="center"
        justifyContent="space-between"
      > 
        <Stack direction="row" spacing="20px" align="center">
          <Image
            boxSize="130px"
            borderRadius="100%"
            objectFit="cover"
            src={image}
            alt="Segun Adebayo"
          />
          <Stack alignItems="flex-start" direction="column" spacing="0">
            <Text color="gray.500" fontSize="25px" fontWeight="bold">{name}</Text>
            <Stack alignItems="flex-start" direction={["column", "column", "row"]} spacing={["0px", "0px", "10px"]} >
              <Text color="gray.500" fontSize="18px" fontWeight="normal">{status}</Text>
              <Text color="gray.500" fontSize="18px" fontWeight="normal">{species}</Text>
              <Text color="gray.500" fontSize="18px" fontWeight="normal">{gender}</Text>
              <Text color="gray.500" fontSize="18px" fontWeight="normal">{type}</Text>
              <Text color="gray.500" fontSize="18px" fontWeight="normal">{origin.name}</Text>
            </Stack>
          </Stack>
        </Stack>
        <IconButton
          color="gray.700"
          m="-15px"
          colorScheme="transparent"
          _focus={{ }}
          aria-label="add favorites"
          icon={ addFavorites ? <AiFillHeart size={20}/> : <AiOutlineHeart size={20}/> }
          onClick={handleAddFavorites}
        />
      </Box>
    </Container>
  );
}
