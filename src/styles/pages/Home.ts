import styled from 'styled-components'

import db from '../../../db.json'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  padding: 2rem 0 0 8rem;

  background-image: url(${db.bg});
  background-color: ${props => props.theme.colors.mainBg};
  background-position: center;
  background-size: cover;
  flex: 1;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;
  }

  svg {
    margin-left: 6rem;
  }

  @media screen and (max-width: 600px) {
    padding: 1.5rem;
    height: 100%;
    background-image: none;

    svg {
      margin: 0 auto;
      display: block;
    }
  }
`

export const Box = styled.div`
  background: ${props => props.theme.colors.mainBg};
  border: 1px solid ${props => props.theme.colors.primary};

  overflow: hidden;
  max-width: 22rem;
  border-radius: 0.4rem;

  margin-top: 1rem;
  margin-bottom: 1rem;
  
  header {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.contrastText};
    padding-left: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  p {
    color: ${props => props.theme.colors.contrastText};
    text-align: left;
    font-size: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  h3 {
    color: #fff;
    font-size: 1rem;
  }

  .content {
    padding: 1.8rem 2.5rem 1.8rem;
  }

  .content img {
    width: 100%;
    height: 150px;

    margin-bottom: 1rem;

    object-fit: cover;
    border-radius: 0.4rem;
  }


  .content input {
    width: 100%;
    padding: 1rem;

    font-size: 0.9rem;
    
    border-radius: 0.4rem;

    border: 1px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.contrastText};
    background-color: ${props => props.theme.colors.mainBg};

  }

  .content button {
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.contrastText};

    border-radius: 0.4rem;
    border: 0px none;
    width: 100%;

    padding: 0.4rem 0.8rem;
    margin-top: 1rem;

    font-weight: bold;
    font-size: 1rem;

    word-break: break-all;
    text-transform: uppercase;

    transition: all 0.3s ease 0s;
    cursor: pointer;
  }

  .content button:disabled {
    background: rgb(151, 151, 151);
    cursor: not-allowed;
  }

  @media screen and (max-width: 600px) {
    p {
      font-size: 1rem;
    }

    .content {
      padding: 1rem 1.2rem 1rem
    }

    .content input {
      font-size: 0.9rem;
    }
  }
`

export const Footer = styled.footer`
  background-color: rgba(0, 0, 0, 0.44);
  padding: 2rem 2.2rem 2rem 2.2rem;

  max-width: 22rem;
  border-radius: 4px;

  img {
    width: 4rem;
  }

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    color: ${props => props.theme.colors.contrastText};
    font-size: 1rem;
    margin-left: 1rem;
  }

  @media screen and (max-width: 600px) {
    background-color: ${props => props.theme.colors.secondary};
    color: #000;
  }
`
