import styled from "styled-components"

const Container = styled.main`
display: flex;
flex-direction: column;
align-items: center;
width: 303px;
margin: 68px auto 0;
h4{
    margin-top:25px;
    font-size:14px;
}
`
const FormContainer = styled.div`
width:100%;
display: grid;
grid-row-gap: 6px;
margin-top:32px;

`
const BlueButton = styled.button`
background: #52B6FF;
color: #FFFFFF;
font-size:20px;
height: 45px;
border:none;
border-radius:5px;

`
export { Container, FormContainer, BlueButton }