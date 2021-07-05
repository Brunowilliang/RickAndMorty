import React, { createContext, useState, useContext } from 'react';

interface CharacterProps {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
  }
  image: string;
}

export const CharactersContext = createContext(null)


export default function CharacterProvider({ children }) {
  const [input, setInput] = useState('');
  const [characters, setCharacter] = useState<CharacterProps[]>([]);
  const [inputError, setInputError] = useState('');

  return (
    <CharactersContext.Provider
      value={{input, setInput, characters, setCharacter, inputError, setInputError}}
    >
      {children}
    </CharactersContext.Provider>
  )
}

export function useCharacters(){
  const context = useContext(CharactersContext);
  const { input, setInput, characters, setCharacter, inputError, setInputError } = context;
  return { input, setInput, characters, setCharacter, inputError, setInputError };
}