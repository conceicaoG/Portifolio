import {styled, css} from 'styled-components'

const center = css`
 display: flex;
 justify-content: center;
 align-items: center;
 `
export const Main = styled.main`
background-color: #222929;
`

export const Inicio = styled.section`
${center}
width: 100%;
height: 85vh;
flex-direction: column;
`
export const Curriculo = styled.div`
margin-right: 75%;
margin-top: 1vw;
@media(max-width: 600px) {
Button{
    width: 20vh;
    font-size: 10px;
}
}
@media(max-width: 480px) {
Button{
    width: 17vh;
    font-size: 9px;
}
}
@media(max-width: 430px) {
Button{
    width: 14vh;
    font-size: 7px;
}
}
@media(max-width: 430px) {

Button{
    width: 14vh;
    font-size: 7px;

}
}
`
export const BemVindo = styled.div`
width: 70%;
color: white;
font-size: 30px;
${center}
  height: 85vh; // Definindo a altura para ocupar toda a tela

p{
    font-size: 20px;
    color: #e4e72e;
    margin-bottom: 2vw;
    margin-top: 1vh;
}

@media(max-width: 700px) {
font-size: 20px;
margin-left: 5vh;
  p{
    font-size: 20px;
    }
  } 
@media(max-width: 540px) {
font-size: 18px;
margin-left: 2vh;
  p{
    font-size: 14px;
    }
  } 

  @media(max-width: 380px) {
font-size: 16px;
  p{
    font-size: 13px;
    }
  } 
  @media(max-width: 320px) {
font-size: 14px;
  p{
    font-size: 11px;
    }
  } 
`
export const TextosSection = styled.section`
width: 100%;
flex-direction: column;
${center}
height: 100%;
`
export const Contato = styled.section`
color: white;
width: 100%;
${center};

img{
    width: 3vw;
    margin:4vh;
    transition: transform 0.3s ease;
}

img:hover {
    transform: scale(1.2);
  }
`

export const AvatarSection = styled.section`
margin-bottom: 6vw;
${center}
img{
width: 80%;
}

@media(max-width: 700px) {
margin-bottom: 10vw;
  img{
    width: 40vh;
    }
  } 

@media(max-width: 580px) {
  img{
    width: 35vh;
    }
  } 

  @media(max-width: 380px) {
    width: 20vh;
  img{
    width: 25vh;
    }
  } 
  @media(max-width: 320px) {
    width: 15vh;
  img{
    width: 20vh;
    }
  } 
`