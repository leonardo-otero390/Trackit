import { Link } from "react-router-dom";
import Logo from "../../assets/Logo";
import { Container, FormContainer, BlueButton } from "./style"
import { TrackItInput } from "../../shared/styled-component/style"
import React, { useContext, useState } from "react";
import Loader from "react-loader-spinner";
import { RequestLogIn } from "../../Services/API";
import { useHistory } from "react-router";
import UserContext from "../../contexts/UserContext";

export default function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { setUserData } = useContext(UserContext);
    const setFunctions = { setLoading, setUserData };
    const history = useHistory();
    const RequestBody = {
        email: email,
        password: password
    }

    return (
        <Container>
            <Logo />
            <FormContainer onSubmit={(e) => {
                e.preventDefault();
                RequestLogIn(RequestBody, history, setFunctions);
            }}>
                <TrackItInput isLoading={loading} requiredtype="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
                <TrackItInput isLoading={loading} required type="password" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)} />
                <BlueButton type="submit">
                    {loading ?
                        <Loader type="ThreeDots" color="#fff" height={80} width={80} />
                        :
                        "Entrar"
                    }
                </BlueButton>
            </FormContainer>
            <h4>
                <Link to="/cadastro">
                    Não tem uma conta?Cadastre-se
                </Link>
            </h4>

        </Container >
    );
}
