import {styled, css} from 'styled-components'

const center = css`
 display: flex;
 justify-content: center;
 align-items: center;
 `
export const Main = styled.main`
border: solid red 1px;
background-color: #464747;
width: 100%;
display: flex;
flex-direction: column;
h2{
    color: white;
    font-size: 30px;
    margin-left: 90vh;
    margin-top: 10vh;
}

`
 export const Principal = styled.div`
 border: solid red 1px;
 ${center}
 img{
    width: 30vw;
    height: 50vh;
    border-radius: 50%;
    margin-left: 20vh;
 }
 `
export const SobreContainer = styled.section`
 flex-direction: column;
`
export const Sobre = styled.p`
border: solid red 1px;
width: 80%;
margin-left: 20vh;
color: white;
font-size: 20px;
`

