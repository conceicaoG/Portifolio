import {styled, css} from 'styled-components'

const center = css`
 display: flex;
 justify-content: center;
 align-items: center;
 `
export const Main = styled.main`
background-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7));

`

export const Inicio = styled.section`
${center}
width: 100%;
height: 85vh;
flex-direction: column;
`
export const Curriculo = styled.div`
margin-top: 20px;
margin-right: 75%;
@media(max-width: 560px) {
Button{
    width: 19vh;
    font-size: 10px;
    margin-left: 4vh;
}
}
@media(max-width: 480px) {
Button{
    width: 17vh;
    font-size: 9px;
    margin-left: 4vh;
}
}
@media(max-width: 400px) {
Button{
    width: 17vh;
    font-size: 9px;
    margin-left: 4vh;
}
}

@media(max-width: 360px) {
Button{
    width: 17vh;
    font-size: 9px;
    margin-left: 6vh;
}
}
`
export const BemVindo = styled.div`
width: 70%;
color: white;
font-size: 2.5rem;
display: flex;
align-items: center;
height: 85vh;
`
export const TextosSection = styled.section`
flex-direction: column;
display:flex;
align-items: baseline;
height: 90%;

p{
    font-size: 2rem;
    margin-top:4vw;
    }
.conhecimento{
    font-size: 1.4rem;
    color: #e4e72e;
    margin-bottom: 3vw;
    margin-top: 3vw;
}

@media(max-width: 800px) {
  width: 150vh;
p{
  font-size: 1.8rem;
}
.conhecimento{
  font-size: 1.2rem;
}
}

@media(max-width: 650px) {
  width: 200vh;
  height: 70%;
p{
  font-size: 1.6rem;
}
.conhecimento{
  font-size: 1.1rem;
}
}

@media(max-width: 650px) {
  width: 200vh;
  height: 70%;
p{
  font-size: 1.6rem;
}
.conhecimento{
  font-size: 1.1rem;
}
}

@media(max-width: 650px) {
  width: 220vh;
  height: 60%;
p{
  font-size: 1.4rem;
}
.conhecimento{
  font-size: 1rem;
}
}

@media(max-width: 470px) {
  width: 240vh;
  height: 55%;
p{
  font-size: 1.2rem;
}
.conhecimento{
  font-size: 1rem;
}
}

`
export const Contato = styled.section`
box-shadow: 0 0 20px 10px rgba(223, 238, 11, 0.582);
color: white;
justify-content: space-evenly;
width: 90%;
display:flex;
align-items: center;

img{
    width: 4vw;
    margin:3vh;
    transition: transform 0.3s ease;
}

img:hover {
    transform: scale(1.2);
  }

  @media(max-width: 800px) {
    img{
    width: 4vw;
    margin:2vh;
    transition: transform 0.3s ease;
}

img:hover {
    transform: scale(1.2);
  }

}

@media(max-width: 630px) {
    img{
    width: 4vw;
    transition: transform 0.3s ease;
}

img:hover {
    transform: scale(1.2);
  }

}

@media(max-width: 430px) {
    img{
    width: 6vw;
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

@media(max-width: 800px) {
margin-bottom: 10vw;
  img{
    width: 100%;
    }
  } 


@media(max-width: 700px) {
margin-bottom: 10vw;
  img{
    width: 90%;
    }
  } 

@media(max-width: 650px) {
  img{
    width: 120%;
    }
  } 


  @media(max-width: 550px) {
  img{
    width: 150%;
    margin-left: 5vh;
    }
  } 
`