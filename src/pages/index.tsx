import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import db from '../../db.json'

import AluraLogo from '../assets/logoAlura.svg'

import { Container, Box, Footer } from '../styles/pages/Home'

const Home: React.FC = () => {
  const [name, setName] = useState<string>('')

  return (
    <Container>
      <Head>
        <title>{db.title}</title>
      </Head>

      <AluraLogo />
      <Box>
        <header>
          <h2>{db.title}</h2>
        </header>

        <form action="">
          <div className="content">
            <p>{db.description}</p>
            <input
              type="text" 
              placeholder="Qual seu nome?"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <Link href={`/quiz?name=${name}`}>
              <button 
                type="submit" 
                disabled={name.length == 0 ? true : false}
              >
                {name.length == 0 ? `Digite seu nome` : `Vamos jogar ${name}?!`}
              </button>
            </Link>
          </div>
        </form>
      </Box>

      <Box>
        <header>
          <h2>Quiz CSS da Alura</h2>
        </header>

        <div className="content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </Box>

      <Footer>
        <a href="">
          <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Alura logo"/>
          <p>Orgulhosamente criado durante <span>Imersão React da Alura</span></p>
        </a>
      </Footer>
    </Container>
  )
}

export default Home
