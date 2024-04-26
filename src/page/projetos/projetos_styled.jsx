import styled,{css} from 'styled-components';

const center = css`
 display: flex;
 justify-content: center;
 align-items: center;
`

export const Main = styled.main`
background-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7));
flex-direction: column;

`
export const Projetos = styled.section`
width: 100%;
flex-direction: column;
display: flex;
`
export const MeusProjetos = styled.div`
${center}
flex-direction: column;
justify-content: space-evenly;
height: 60vh;
`
export const Titulo = styled.div`
p{
  box-shadow: 0 0 20px 10px rgba(223, 238, 11, 0.582);
  font-size: 1.8rem;
  color: #e4e72e;
  padding: 10px;
  border-radius: 10px;
}

@media(max-width: 450px) {
p{
  font-size: 1.5rem;
}
}
`
export const CardProjetos = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-around;
`
export const Card = styled.div`
width: 17vw;
height: 40vh;
border: solid #e4e72e 4px;
border-radius: 5%;
flex-direction: column;
align-items: top;
${center}
transition: transform 0.3s ease;

&:hover {
    transform: scale(1.1);
  }

video{
text-align: center;
border-radius: 5%;
height: 50%;
transition: transform 0.3s ease;
width: 100%
}

p{
color: white;
font-size: 1rem;
margin-top: 1vw;
text-align: center;
}

@media(max-width: 800px) {
width: 25vw;
height: 40vh;
video{
height: 40%;
width: 100%
}
}

@media(max-width: 580px) {
width: 30vw;
height: 40vh;
}
p{
  font-size: 0.8rem;
}
`
export const Texto1 = styled.div`
color: white;
font-size: 1.5rem;
margin-top: 1vw;

@media(max-width: 580px) {
font-size: 1rem;
}
`
export const Habilidades = styled.section`
background: linear-gradient(to right, #000000, #3a3a3a, #3a3a3a,  #000000);
height: 25vh;
flex-direction: column;
display: flex;
align-items: center;
justify-content: space-evenly;

figure{
display: flex;
align-items: center;
}
p{
  margin-top: 2vw;
  box-shadow: 0 0 20px 10px rgba(223, 238, 11, 0.582);
  font-size: 1.5rem;
  color: #e4e72e;
}
img{
    width: 5vw;
    margin: 3vh;
    transition: transform 0.3s ease;
}

img:hover {
    transform: scale(1.2);
  }

@media(max-width: 580px) {
  img{
    margin: 2vh;
}
}

@media(max-width: 420px) {
  p{
  font-size: 1.2rem;
}
}
`