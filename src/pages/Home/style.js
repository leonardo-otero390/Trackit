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
const FormContainer = styled.form`
width:100%;
display: grid;
grid-row-gap: 6px;
margin-top:32px;

`
const BlueButton = styled.button`

background: ${props=>props.isLoading? " #52B6FF": "#52B6FF"};
color: #FFFFFF;
font-size:20px;
height: 45px;
border:none;
border-radius:5px;
display:flex;
justify-content: center;
align-items: center;

`
export { Container, FormContainer, BlueButton }