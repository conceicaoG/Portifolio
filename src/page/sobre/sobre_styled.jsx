import {styled, css} from 'styled-components'

const center = css`
 display: flex;
 justify-content: center;
 align-items: center;
 `

export const Main = styled.main`
`
export const Sobre = styled.div`
background-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7));
${center}
flex-direction: column;
height: 85vh;
justify-content: space-around;
 `

export const Titulo = styled.h2`
 color: #e4e72e;
 font-size: 1.8rem;
 box-shadow: 0 0 20px 10px rgba(223, 238, 11, 0.582);
 border-radius: 15%;
 padding: 10px;

 @media(max-width: 700px) {
    font-size: 1.5rem;
}

@media(max-width: 630px) {
    font-size: 1.5rem;
}

@media(max-width: 560px) {
    font-size: 1.4rem;
}

@media(max-width: 520px) {
    font-size: 1.2rem;
}

@media(max-width: 450px) {
    font-size: 1.2rem;
}

@media(max-width: 390px) {
    font-size: 1rem;
}
`;

export const SobreContainer = styled.section`
display: flex;
justify-content: space-around;
width: 100%;
align-items: center;

@media(max-width: 700px) {
    margin-bottom: 8vh;
}

@media(max-width: 390px) {
    margin-bottom: 1vh;

}
`

export const Img = styled.img`
box-shadow: 0 0 20px 10px rgba(223, 238, 11, 0.582);
width: 20%;
height: 80%;
border-radius: 50%;

@media(max-width: 1100px) {
    width: 30%;
    height: 70%;
}

@media(max-width: 700px) {
    width: 28%;
    height: 55%;
    margin-left: 2vh;
}

@media(max-width: 520px) {
    width: 27%;
    height: 50%;
    margin-left: 2vh;
}

@media(max-width: 420px) {
    width: 25%;
    height: 45%;
    margin-left: 2vh;
}

@media(max-width: 390px) {
    width: 30%;
    height: 35%;
    margin-left: 2vh;
}
`;

export const Texto = styled.p`
box-shadow: 0 0 20px 10px rgba(223, 238, 11, 0.582);
padding: 30px;
border-radius: 20%;
width: 50%;
color: white;
font-size: 1.4rem;

@media(max-width: 1100px) {
    font-size: 1.2rem;
    width: 60%;
    margin-left: 2vh;
}

@media(max-width: 800px) {
    font-size: 1.2rem;
    width: 65%;
    margin-left: 2vh;
    padding: 25px;
}

@media(max-width: 700px) {
    font-size: 1.1rem;
    width: 70%;
    margin-left: 2vh;
    margin-right: 2vh;
}

@media(max-width: 650px) {
    font-size: 1rem;
    width: 75%;
    margin-left: 2vh;
    margin-right: 2vh;
    padding: 25px;
}

@media(max-width: 560px) {
    font-size: 1rem;
    width: 90%;
    margin-left: 2vh;
    margin-right: 2vh;
    padding: 20px;
}

@media(max-width: 520px) {
    font-size: 0.9rem;
    width: 150%;
    margin-left: 2vh;
    margin-right: 2vh;
    padding: 20px;
}

@media(max-width: 450px) {
    font-size: 0.8rem;
    width: 180%;
    margin-left: 2vh;
    margin-right: 2vh;
}

@media(max-width: 390px) {
    font-size: 0.8rem;
    width: 80%;
    margin-left: 2vh;
    margin-right: 2vh;
    padding: 18px;
}
`