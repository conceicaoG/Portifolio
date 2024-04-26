import React from 'react'
import * as S from './header_styled'
import { Link } from 'react-router-dom';
import logoGabriel2 from '../../assets/header/logoGabriel2.png'

export default function Header() {
  return (
    <S.Header>
      <S.Logo>
      <a href="/">
        <img src={logoGabriel2} alt="" />
      </a>  
        <S.Nome>Gaab_Conceicao</S.Nome>
      </S.Logo>
      <S.Box>
        <S.Lista><Link to="/">Inicio</Link></S.Lista>
        <S.Lista><Link to="/sobre">Sobre mim</Link></S.Lista>
        <S.Lista><Link to="/projetos">Projetos</Link></S.Lista>
      </S.Box>
    </S.Header>
  )
}
