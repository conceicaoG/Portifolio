import React from 'react'
import Slider from 'react-slick';
import Header from '../../components/Header/Header';
import * as S from './projetos_styled'
import Card from '../../page/projetos/Card'
import html from '../../assets/projetos/htmlLogo.png'
import css from '../../assets/projetos/cssLogo.png'
import js from '../../assets/projetos/jsLogo.png'
import react from '../../assets/projetos/reactLogo.png'
import styled from '../../assets/projetos/styledLogo.png'
import vsCode from '../../assets/projetos/vsCodeLogo.png'
import net from '../../assets/projetos/netLogo.png'
import angular from '../../assets/projetos/angularLogo.png'
import mc from '../../assets/projetos/videoMC.mp4'
import gitWhite from '../../assets/projetos/githubLogoWhite.png'

export default function Projetos() {
  return (
    <S.Main>
      <Header />
      <S.Projetos>
        <S.MeusProjetos>
        <S.Titulo>
          <p>Meus Projetos:</p>
          </S.Titulo>
          <S.CardProjetos>
            <Card video={mc} texto={"Mc Donald's"} texto2={"TECNOLOGIAS: HTML - REACT.JS E STYLED-COMPONENTS"} imagem={html} />
            <Card video={mc} texto={"Mc Donald's"} texto2={"TECNOLOGIAS HTML - REACT.JS E STYLED-COMPONENTS"} imagem={html} />
            <Card video={mc} texto={"Mc Donald's"} texto2={"TECNOLOGIAS HTML - REACT.JS E  STYLED-COMPONENTS"} imagem={html} />
          </S.CardProjetos>
        </S.MeusProjetos>
      </S.Projetos>
        <S.Habilidades>
          <p>Algumas das minhas Habilidades:</p>
          <figure>
            <img src={html} alt="" />
            <img src={css} alt="" />
             <img src={react} alt="" />
            <img src={angular} alt="" />
            <img src={styled} alt="" />
            <img src={net} alt="" />
            <img src={gitWhite} alt="" />
            <img src={vsCode} alt="" />
          </figure>
        </S.Habilidades>
    </S.Main>
  )
}
