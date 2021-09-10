import { Link } from "react-router-dom";
import Logo from "../../assets/Logo";
import { Container, FormContainer, TrackItInput, BlueButton } from "../shared/styled-component/styled-components"

export default function SignUp() {
    return (
        <Container>
            <Logo />
            <FormContainer>
                <TrackItInput type="text" placeholder="email" />
                <TrackItInput type="password" placeholder="senha" />
                <TrackItInput type="text" placeholder="nome" />
                <TrackItInput type="text" placeholder="foto" />
                <BlueButton>Cadatrar</BlueButton>
            </FormContainer>
            <h4>
                <Link to="/">
                    Já tem uma conta? Faça login!
                </Link>
            </h4>
        </Container>
    );
}
