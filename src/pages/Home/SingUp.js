import { Link } from "react-router-dom";
import Logo from "../../assets/Logo";
import { Container, FormContainer, BlueButton } from "./style"
import { TrackItInput } from "../../shared/styled-component/style"
import { useState } from "react";
import { RequestSignUp} from "../../Services/API.js";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router";
export default function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const RequestBody = {
        email: email,
        name: name,
        image: image,
        password: password
    }
    return (
        <Container>
            <Logo />
            <FormContainer onSubmit={(e) => {
                e.preventDefault();
                RequestSignUp(RequestBody,history,setLoading);
            }}>
                <TrackItInput isLoading={loading} type="email" required placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
                <TrackItInput isLoading={loading} type="password" required placeholder="senha" value={password} onChange={e => setPassword(e.target.value)} />
                <TrackItInput isLoading={loading} type="text" required placeholder="nome" value={name} onChange={e => setName(e.target.value)} />
                <TrackItInput isLoading={loading} type="url" required placeholder="foto" value={image} onChange={e => setImage(e.target.value)} />
                <BlueButton isLoading={loading} type="submit">
                    {loading ?
                        <Loader type="ThreeDots" color="#fff" height={80} width={80} />
                        :
                        "Cadastrar"
                    }
                </BlueButton>
            </FormContainer>
            <h4>
                <Link to="/">
                    Já tem uma conta? Faça login!
                </Link>
            </h4>
        </Container>
    );
}
