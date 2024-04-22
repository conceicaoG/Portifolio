import styled,{css} from 'styled-components';

const center = css`
 display: flex;
 justify-content: center;
 align-items: center;
`

export const Footer = styled.footer`
background-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7));
width: 100%;
padding: 10vh;
${center}
flex-direction: column;
p{
    margin-bottom: -2vw;
    font-size: 30px;
    color: #e4e72e;
}
`

export const Habilidades = styled.section`
//border: solid #e4e72e 4px;
padding:2vh;
p{
    margin-left: 35vh;
    margin-bottom: 3vw;
    font-size: 30px;
    color: #e4e72e;
}
.image-wrapper {
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease;
}
img{
    width: 5vw;
    margin-left: 3vh;
    transition: transform 0.3s ease;
}

img:hover {
    transform: scale(1.2); /* Ajuste o fator de escala conforme necessário */
  }
`
export const Projetos = styled.section`
width: 100%;
${center}
margin: 4vw;
`
export const Card = styled.div`
border: solid #e4e72e 4px;
border-radius: 5%;
width: 20vw;
height: 50vh;
display: flex;
flex-direction: column;
align-items: center;
margin-left: 10vh;
margin-right: 10vh;
transition: transform 0.3s ease;

&:hover {
    transform: scale(1.1); /* Ajuste o fator de escala conforme necessário */
  }

video{
margin-top: 1vw;
border-radius: 5%;
height: 50%;
transition: transform 0.3s ease;
width: 90%
}

p{
color: white;
font-size: 17px;
margin-top: 1vw;
}
`
export const Texto1 = styled.div`
color: white;
font-size: 25px;
margin-top: 1vw;
`
