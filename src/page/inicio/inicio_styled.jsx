import {styled, css} from 'styled-components'

const center = css`
 display: flex;
 justify-content: center;
 align-items: center;
 `
export const Main = styled.main`
background-color: #222929;
width: 100%;
`

export const Inicio = styled.section`
${center}
width: 100%;
padding: 1.3%;
`
export const Curriculo = styled.div`
margin-bottom: 35vw;
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
`