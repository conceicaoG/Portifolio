import {styled, css} from 'styled-components'

const center = css`
 display: flex;
 justify-content: center;
 align-items: center;
 `
export const Main = styled.main`
background-color: #222929;
width: 100%;
@media(max-width: 550px) {
  height: 70%;
  margin-right: 10px;
  /* img{
    width: 50%vh;
    } */
  } 
`

export const Inicio = styled.section`
${center}
width: 100%;
padding: 1.3%;


`
export const Curriculo = styled.div`
margin-bottom: 35vw;

@media(max-width: 470px) {
Button{
    width: 20vh;
    font-size: 10px;
    text-align: left;
}
}
@media(max-width: 440px) {
Button{
    width: 17vh;
    font-size: 9px;
    margin-left: 2vh;
}
}
`
export const BemVindo = styled.div`
width: 70%;
color: white;
font-size: 30px;
${center}
height: 30vw;
margin-left: 10vh;
p{
    font-size: 20px;
    color: #e4e72e;
    margin-bottom: 2vw;
    margin-top: 1vh;
}

@media(max-width: 750px) {
width: 100%;
font-size: 25px;
  p{
    font-size: 16px;
    }
  } 
  @media(max-width: 700px) {
width: 100%;
font-size: 20px;
margin-left: 5vh;
  p{
    font-size: 16px;
    }
  } 
@media(max-width: 540px) {
width: 100%;
font-size: 18px;
margin-left: 2vh;
  p{
    font-size: 14px;
    }
  } 

@media(max-width: 480px) {
width: 100%;
font-size: 15px;
  p{
    font-size: 12px;
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
width: 100%;
height: 100%;

img{
width: 80%;
margin-left: 8vh;
}

@media(max-width: 700px) {
margin-bottom: 10vw;
  img{
    width: 30vh;
    margin-left: 0;
    }
  } 

@media(max-width: 580px) {
margin-bottom: 10vw;
  img{
    width: 25vh;
    }
  } 
 @media(max-width: 510px) {
margin-bottom: 5vw;
  img{
    width: 25vh;
    }
  } 
`