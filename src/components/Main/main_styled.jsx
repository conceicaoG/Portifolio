import {styled, css} from 'styled-components'

const center = css`
 display: flex;
 justify-content: center;
 align-items: center;
 `
export const Main = styled.main`
//border: solid red 1px;
background-color: #222929;

width: 100%;
display: flex;
flex-direction: column;
`
export const Inicio = styled.section`
//border: solid green 1px;
${center}
margin-bottom: 7vw;
margin-top: 3vw;
img{
    width: 50vh;
    margin-right: 5vh;
    margin-left: 5vh;
}
`
export const BemVindo = styled.div`
//border: solid red 1px;
width: 70vh;
color: white;
font-size: 30px;
margin-right: 40vh;
p{
    font-size: 20px;
    color: #e4e72e;
    margin-bottom: 2vw;
}
`
export const Contato = styled.section`
//border: solid green 1px;
color: white;
width: 100%;
height: 6vh;
${center};

.image-wrapper {
    transition: transform 0.3s ease;  
}

img{
    width: 2vw;
    margin-top: 0.5vw;
    transition: transform 0.3s ease;
    align-items: center;   
}

img:hover {
    transform: scale(1.2);
  }
`
 export const Sobre = styled.div`
//border: solid blue 1px;
padding: 10vh;
background-color: #464747;
${center}
width: 100%;
flex-direction: column;
 `
 export const Titulo = styled.h2`
 //color: white;
 color: #e4e72e;
 font-size: 30px;
 margin-right: 20px;
 border: solid #e4e67f 4px;
 border-radius: 15%;
 padding: 10px;
`;

export const Img = styled.img`
width: 25vw;
height: 50vh;
border-radius: 50%;
margin-left: 10vh;
`;
export const SobreContainer = styled.section`
${center}
`
export const Texto = styled.p`
padding: 30px;
border-radius: 20%;
width: 60%;
color: white;
font-size: 22px;
margin-left: 10vh;
margin-right: 20vh;
`