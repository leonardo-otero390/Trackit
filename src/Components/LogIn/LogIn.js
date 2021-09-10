import { Link } from "react-router-dom";
import Logo from "../../assets/Logo";
import { Container, FormContainer, TrackItInput, BlueButton } from "../shared/styled-component/styled-components"

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
