import React, { useState, FormEvent } from 'react';
import Head from 'next/head'

import api from '../services/api';
import Header from '../components/Header';
import InputSearch from '../components/InputSearch';
import Card from '../components/Card';
import { Text } from '@chakra-ui/react';

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

export default function Home({id, name, status, species, type, gender, origin, image }: CharacterProps) {
  const [input, setInput] = useState('');
  const [inputError, setInputError] = useState('');
  const [characters, setCharacter] = useState<CharacterProps[]>([])


  async function handleSearchCast(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!input) {
      setInputError('Digite o nome do personagem');
      return;
    }

    try {
      const response = await api.get<CharacterProps>(`?name=${input}`);

      const character = response.data;

      setCharacter([...characters, character]);
      setInput('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na Busca por esse personagem');
    }
  }

  return (
    <>
      <Head>
        <title>Home | GoAgenda</title>
      </Head>

      <Header title="Explore os persongens do seriado"/>

      <InputSearch onClick={() => {handleSearchCast}} />

      <Text
        color="gray.500"
      >
        {!!inputError}
      </Text>

      {characters.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          gender={character.gender}
          image={character.image}
          origin={character.origin}
          species={character.species}
          status={character.status}
          type={character.type}
        />
      ))}
    </>
  )
}
