import React from 'react'
import logo from '../../assets/main/logo.jpg'
import * as S from './main_styled'

export default function Main() {
  return (
    <S.Main>
      <h2>Sobre mim</h2>
      <S.Principal>  
      <img src={logo} alt="" />
      <S.SobreContainer>
        <S.Sobre> 
          Desenvolvedor desde 2022, meu primeiro contato com a programação foi no Curso técnico de 
          Mecatronica, lá começou minha paixão pela programação. Concluí o curso iniciei minha 
          graduação em Análise e Desenvolivmento de Sistemas então ingressei na BRQ Solutions como estágiario
          iniciei os trabalhos no Itaú Unibanco, onde tive o privilégio de fazer parte de uma equipe de 
          consultores. Nessa posição, trabalhando com a metodologia Ágil scrum, concentrei meus esforços 
          em desenvolver soluções inovadoras na linguagem de programação C#, Angular e estudei um pouco de 
          Java. Fiquei muito entusiasmado em aprender mais sobre o desenvolvimento de software e aplicar 
          minhas habilidades em um ambiente profissional de alto nível.
        </S.Sobre>
      </S.SobreContainer>
      </S.Principal>
    </S.Main>
  )
}
