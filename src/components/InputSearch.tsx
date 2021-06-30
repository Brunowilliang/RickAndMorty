import React from 'react';
import { Container, Button, Input, InputRightElement, InputGroup } from '@chakra-ui/react'

interface Props {
  onClick: () => void;
}

export default function InputSearch({onClick}: Props)  {
  return(
    <Container maxW="700px" px="20px" mb="30px">
      <InputGroup mt="-30px">
        <Input
          height="60px"
          bgColor="white.500"
          pl="30px"
          fontSize={["15px", "17px", "18px"]}
          borderColor="transparent"
          focusBorderColor="transparent"
          color="gray.500"
          placeholder="Enter password"
          _hover={{ borderColor: "transparent" }}
          _placeholder={{color: "gray.500"}}
          />
        <InputRightElement w="auto" h="auto">
          <Button
            h="60px"
            p={["10px", "25px", "30px"]}
            fontSize={["15px", "17px", "18px"]}
            bgColor="gray.700"
            color="white.500"
            borderTopLeftRadius="0"
            borderBottomLeftRadius="0"
            colorScheme="transparent"
            _hover={{ bgColor: "gray.500" }}
            _focus={{ }}
            onClick={onClick}
          >
            Pesquisar
          </Button>
        </InputRightElement>
      </InputGroup>
    </Container>
      
  );
}