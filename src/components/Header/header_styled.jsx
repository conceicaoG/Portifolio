import {styled, createGlobalStyle, css} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`
const center = css`
 display: flex;
 justify-content: center;
 align-items: center;
 `

export const Header = styled.header`
//border: solid red 1px;
background-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 2), rgba(0, 0, 0, 3));
width: 100%;
height: 15vh;
${center};
justify-content: space-evenly;

@media(max-width: 370px) {
  width: 100%;
}
`

export const Logo = styled.div`
//border: solid 1px red;
width: 10%;
margin-right: 100px;
padding: 0 50px;
display: flex;
flex-direction: column;
align-items: center;
img{
    //border: solid 1px green;
    width: 15vh;
}
//responsivo
@media(max-width: 550px) {
  width: 8%;
  margin-right: 10px;
  img{
    width: 13vh;
    }
  } 
  @media(max-width: 430px) {
  width: 6%;
  margin-right: 15px;
  img{
    width: 11vh;
    }
  } 
//Responsivo
`

export const Nome = styled.p`
//border: solid 1px orange;
color: white;

//Responsivo
@media(max-width: 550px) {
  font-size: 14px;
}

@media(max-width: 430px) {
  font-size: 12px;
}
//Responsivo
`

export const Box = styled.ul`
//border: solid 1px red;
  width: 60%;
  justify-content: space-around;
  list-style: none;
  display: flex;
  color: white;
 
//Responsivo  
  @media(max-width: 550px) {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

@media(max-width: 430px) {
  width: 90vh;
  display: flex;
  justify-content: space-around;
}
//Responsivo
`

export const Lista = styled.li`
  color: white;
`