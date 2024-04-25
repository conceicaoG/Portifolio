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
background: linear-gradient(to right, #000000, #000001, #161616,  #353434);
width: 100%;
height: 15vh;
${center};
justify-content: space-evenly;

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
width: 60%;
height: 50%;
list-style: none;
display: flex;
justify-content: space-around;
align-items: center;
 
//Responsivo  
  @media(max-width: 550px) {
  width: 70%;
}

@media(max-width: 430px) {
  width: 60%;
}
//Responsivo
`

export const Lista = styled.li`
a{
  font-size: 1.5rem;
  color: white;
}
@media(max-width: 430px) {
 a{
  font-size: 1rem;
 }
}
`