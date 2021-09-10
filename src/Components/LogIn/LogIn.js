import Logo from "../../assets/Logo";
import styled from "styled-components";
export default function LogIn() {
    return (
        <Container>
            <Logo />
            <LoginContainer>
                <UserInput type="text" placeholder="email" />
                <UserInput type="password" placeholder="senha" />
                <BlueButton>Entrar</BlueButton>
            </LoginContainer>
            <h4>Não tem uma conta? Cadastre-se</h4>
        </Container>
    );
}
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
const LoginContainer = styled.div`
width:100%;
display: grid;
grid-row-gap: 6px;
margin-top:32px;

`

const UserInput = styled.input`
height: 45px;
border: 1px solid #D5D5D5;
padding-left:11px;
::placeholder{
    font-size:20px;
}
`
const BlueButton = styled.button`
background: #52B6FF;
color: #FFFFFF;
font-size:20px;
height: 45px;
border:none;
border-radius:5px;

`