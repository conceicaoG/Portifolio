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
margin-top: 1vw;
margin-right: 75%;
@media(max-width: 560px) {
Button{
    width: 17vh;
    font-size: 10px;
}
}
@media(max-width: 480px) {
Button{
    width: 15vh;
    font-size: 9px;
    margin-left: 2vh;
}

}
`
export const BemVindo = styled.div`

width: 70%;
color: white;
font-size: 30px;
display: flex;

align-items: center;
height: 85vh;

p{
    font-size: 20px;
    color: #e4e72e;
    margin-bottom: 2vw;
    margin-top: 1vh;
}

@media(max-width: 700px) {
font-size: 20px;

  p{
    font-size: 20px;
    }
  } 

@media(max-width: 540px) {
font-size: 20px;
width: 90%;
  p{
    font-size: 16px;
    }
  } 

`
export const TextosSection = styled.section`
flex-direction: column;
${center}
height: 100%;

`
export const Contato = styled.section`
color: white;
width: 100%;
${center};

img{
    width: 4vw;
    margin:3vh;
    transition: transform 0.3s ease;
}

img:hover {
    transform: scale(1.2);
  }

@media(max-width: 430px) {
    img{
    width: 6vw;
    margin:3vh;
    transition: transform 0.3s ease;
}

img:hover {
    transform: scale(1.2);
  }

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
    width: 80%;
    }
  } 

@media(max-width: 600px) {
  img{
    width: 90%;
    }
  } 


  @media(max-width: 500px) {
  img{
    width: 120%;
    }
  } 

  @media(max-width: 380px) {
  img{
    width: 160%;
    }
  } 

`