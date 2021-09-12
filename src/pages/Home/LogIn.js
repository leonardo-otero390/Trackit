import { Link } from "react-router-dom";
import Logo from "../../assets/Logo";
import { Container, FormContainer, BlueButton } from "./style"
import {TrackItInput} from "../../shared/styled-component/style"

export default function LogIn() {
    return (
        <Container>
            <Logo />
            <FormContainer>
                <TrackItInput type="text" placeholder="email" />
                <TrackItInput type="password" placeholder="senha" />
                <BlueButton>Entrar</BlueButton>
            </FormContainer>
            <h4>
                <Link to="/cadastro">
                    Não tem uma conta?Cadastre-se
                </Link>
            </h4>

        </Container >
    );
}
