import Head from 'next/head'
import React from 'react';

import { Container } from "@chakra-ui/react"
import Header from '../components/Header';
import InputSearch from '../components/InputSearch';

export default function Favoritos() {
  return (
    <>
      <Head>
        <title>Home | GoAgenda</title>
      </Head>
      <Header title="Sua lista de personagens favoritos"/>
    </>
  )
}
