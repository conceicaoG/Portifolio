import {styled, css} from 'styled-components'

const center = css`
 display: flex;
 justify-content: center;
 align-items: center;
 `

export const Main = styled.main`
background-color: #464747;
width: 100%;
`
export const Sobre = styled.div`
background-color: #464747;
${center}
padding: 1.2%;
flex-direction: column;
 `

export const Titulo = styled.h2`
 color: #e4e72e;
 font-size: 30px;
 border: solid #e4e67f 4px;
 border-radius: 15%;
 padding: 10px;
`;

export const SobreContainer = styled.section`
${center}
width: 100%;
padding-top: 2%;
`

export const Img = styled.img`
width: 25vw;
height: 50vh;
border-radius: 50%;
margin-left: 10vh;
`;

export const Texto = styled.p`
padding: 30px;
border-radius: 20%;
width: 60%;
color: white;
font-size: 22px;
margin-left: 25vh;
margin-right: 20vh;
`