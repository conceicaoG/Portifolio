import React from 'react'
import Header from '../../components/Header/Header'
import * as S from "./sobre_styled"
import logo from '../../assets/sobre/logo.jpg'

export default function Sobre() {
    return (
        <S.Main>
            <Header/>
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
