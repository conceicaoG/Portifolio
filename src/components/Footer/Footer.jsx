import React from 'react'
import * as S from './footer_styled'
import Card from './Card'
import html from '../../assets/footer/htmlLogo.png'
import css from '../../assets/footer/cssLogo.png'
import js from '../../assets/footer/jsLogo.png'
import react from '../../assets/footer/reactLogo.png'
import styled from '../../assets/footer/styledLogo.png'
import vsCode from '../../assets/footer/vsCodeLogo.png'
import net from '../../assets/footer/netLogo.png'
import angular from '../../assets/footer/angularLogo.png'
import mc from '../../assets/footer/videoMC.mp4'
import gitWhite from '../../assets/footer/githubLogoWhite.png'

export default function Footer() {
  return (
    <S.Footer>
      <p>Meus Projetos:</p>
      <S.Projetos>
        <Card video={mc} texto={"Mc Donald's"} texto2={"Tecnologias: Html, CSS e JavaScript"} imagem={html}/>
        <Card video={mc} texto={"Mc Donald's"} texto2={"Tecnologias: Html, CSS e JavaScript"} imagem={html}/>
        <Card video={mc} texto={"Mc Donald's"} texto2={"Tecnologias: Html, CSS e JavaScript"} imagem={html}/>
      </S.Projetos>
      <S.Habilidades>
        <p>Algumas das minhas Habilidades:</p>
        <img src={html} alt="" />
        <img src={css} alt="" />
        <img src={js} alt="" />
        <img src={react} alt="" />
        <img src={angular} alt="" />
        <img src={styled} alt="" />
        <img src={net} alt="" />
        <img src={gitWhite} alt="" />
        <img src={vsCode} alt="" />
      </S.Habilidades>
    </S.Footer>
  )
}
