import React, { useState, useContext } from 'react';
import Head from 'next/head'

import api from '../services/api';
import Header from '../components/Header';
import InputSearch from '../components/InputSearch';
import Card from '../components/Card';
import { Text, useToast } from '@chakra-ui/react';
import { useCharacters } from '../context/Characters';


export default function Home() {
  const toast = useToast();
  const [addFavorites, setAddFavorites] = useState(false)

  const {
    characters, setCharacter,
    input, setInput,
    inputError, setInputError,
  } = useCharacters();
  
  async function handleSearchCast() {

    if (!input) {
      setInputError('Digite o nome de algum personagem');
      setCharacter([]);
      return;
    }

    try {
      const response = await api.get(`?name=${input}`);
      const data = response.data.results;
      
      setCharacter([ ...data ]);
      setInput('');
      setInputError('');
    } catch (err) {
      setInputError('Nenhum personagem encontrado');
    }
    
  }


  function handleAddFavorites() {
    setAddFavorites(true)
    toast({
      description: "Adicionado a lista de favoritos",
      status: "success",
      position: "top-right",
      duration: 3000,
      isClosable: true,
    })
  }

  function handleUnFavorite() {
    setAddFavorites(false)
    toast({
      description: "Removido da lista de favoritos",
      status: "error",
      position: "top-right",
      duration: 3000,
      isClosable: true,
    })
  }


  return (
    <>
      <Head>
        <title>Home | Rick And Morty </title>
      </Head>

      <Header
        buttonTitle="Favoritos"
        title="Explore os persongens do seriado"
        linkPage="/favoritos"  
        type="favorite"
      />

      <InputSearch value={input} onChange={setInput} onClick={handleSearchCast} />

      {inputError &&
        <Text
          textAlign="center"
          color="orange.500"
          fontSize="20px"
          fontWeight="bold"
          mb="30px"
        >
          {inputError}
        </Text>
      }

      {characters.map((data) => (
        <Card
          key={`card${data.id}`}
          id={data.id}
          name={data.name}
          image={data.image}
          status={data.status ? data.status : "-"}
          species={data.species ? data.species : "-"}
          type={data.type ? data.type : "-"}
          gender={data.gender ? data.gender : "-"}
          origin={{ name: data.origin.name ? data.origin.name : "-" }}
          onClick={addFavorites ? handleUnFavorite : handleAddFavorites}
          favoriteButton={addFavorites ? 'addFavorites' : 'unFavorite'}
        />
      ))}
    </>
  )
}
