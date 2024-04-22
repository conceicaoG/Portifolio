import React from 'react'
import logo from '../../assets/main/logo.jpg'
import avatar from'../../assets/main/avatar.png'
import gitWhite from '../../assets/main/githubLogoWhite.png'
import insta from '../../assets/main/instagramLogo.png'
import linkedin from '../../assets/main/linkedinLogo.png'

import * as S from './main_styled'

export default function Main() {
  return (
    <S.Main>
      <S.Inicio>
        <S.BemVindo>
          Prazer, Sou Gabriel um desenvolvedor em crescimento constante 👨‍💻
          <p>“O conhecimento é a moeda mais valiosa no mundo atual.” – Geoffrey Moore</p>
          <S.Contato>
            <a href="https://www.instagram.com/gaab_97/" target="_blank">  
            <img src={insta} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/gabriel-concei%C3%A7%C3%A3o-258017172/" target="_blank">  
            <img src={linkedin} alt=""  />
            </a>
            <a href="https://github.com/conceicaoG" target="_blank" >  
            <img src={gitWhite} alt="" />
            </a>
        </S.Contato>
        </S.BemVindo>
        <img src={avatar} alt="" />
      </S.Inicio>
      <S.Sobre>  
      <S.Titulo>Me conheça um pouco mais</S.Titulo>
      <S.SobreContainer>
      <S.Img src={logo} alt="" />
        <S.Texto> 
          Desenvolvedor desde 2022, meu primeiro contato com a programação foi no Curso técnico de 
          Mecatrônica, lá começou minha paixão pela programação. Concluí o curso e iniciei minha 
          graduação em Análise e Desenvolvimento de Sistemas.
          Então Ingressei na BRQ Solutions como estagiário e iniciei os trabalhos no Itaú Únibanco, nessa 
          posição trabalhando com a metodologia Ágil Scrum, concentrei meus esforços em desenvolver soluções 
          inovadoras nas linguagens de programação .Net, Angular e nesse meio período eu fiz alguns cursos de 
          Back-end e Front-end e um deles foi o bootcamp de Front-end do Vai Na Web e pude aprofundar meus 
          conhecimentos em Html, CSS, JavaScript e React.Js. 
          Fiquei muito entusiasmado em aprender mais sobre o desenvolvimento de software e interessado em 
          aplicar minhas habilidades em um ambiente profissional de alto nível.
        </S.Texto>
      </S.SobreContainer>
      </S.Sobre>
    </S.Main>
  )
}
