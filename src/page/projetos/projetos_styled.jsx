import styled,{css} from 'styled-components';

const center = css`
 display: flex;
 justify-content: center;
 align-items: center;
`

export const Main = styled.main`
background-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7));
width: 100%;
${center}
flex-direction: column;
`
export const Projetos = styled.section`
width: 100%;
${center}
margin-top: 2vw;
flex-direction: column;
p{
    font-size: 30px;
    color: #e4e72e;
}
`
export const CardProjetos = styled.div`
${center}
margin-top: 2vw;
`
export const Card = styled.div`
border: solid #e4e72e 4px;
border-radius: 5%;
width: 15vw;
height: 40vh;
display: flex;
flex-direction: column;
align-items: center;
margin-left: 10vh;
margin-right: 10vh;
transition: transform 0.3s ease;

&:hover {
    transform: scale(1.1);
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
margin-top: 2vw;
}
`
export const Texto1 = styled.div`
color: white;
font-size: 25px;
margin-top: 1vw;
`
export const Habilidades = styled.section`
background-color: #3d3b3b;
width: 100%;
flex-direction: column;
margin-top: 2vw;
${center}
p{
  margin-top: 1vw;
  font-size: 30px;
  color: #e4e72e;
}

img{
    width: 5vw;
    margin: 4vh;
    transition: transform 0.3s ease;
}

img:hover {
    transform: scale(1.2);
  }
`