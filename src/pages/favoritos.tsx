import Head from 'next/head'
import React from 'react';
import Header from '../components/Header';

export default function Favoritos() {
  return (
    <>
      <Head>
        <title>Favoritos | Rick And Morty</title>
      </Head>
      <Header
        buttonTitle="Voltar"
        title="Sua lista de personagens favoritos"
        linkPage="/"
        type="back"  
      />
    </>
  )
}
