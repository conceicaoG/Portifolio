import React from 'react'
import * as S from './header_styled'
import logoGabriel from '../../assets/header/logoGabriel.png'
import logoGabriel2 from '../../assets/header/logoGabriel2.png'

export default function Header() {
  return (
    <S.Header>
      <S.Logo>
        <img src={logoGabriel2} alt="" />
        <S.Nome>Gaab_Conceicao</S.Nome>
      </S.Logo>
      <S.Lista>
        <li>ÍNICIO</li>
        <li>SOBRE</li>
        <li>PROJETOS</li>
        <li>CONTATO</li>
      </S.Lista>
    </S.Header>
  )
}
