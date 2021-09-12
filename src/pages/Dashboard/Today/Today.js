import Footer from "../shared/components/Footer";
import Header from "../shared/components/Header";
import { Body, Container } from "../shared/styled-component/style";
import { HabitCard, CheckButton } from "./style"
import { CheckmarkOutline } from 'react-ionicons'



export default function Habits() {
    return (
        <Body>
            <Header />
            <Container>
                <div>
                    <h2 className="blue-title">Segunda, 17/05</h2>
                    <h3 className="grey-subtitle">Nenhum hábito concluído ainda</h3>
                </div>
                <ul>
                    <HabitCard>
                        <div>
                            <h1>Ler 1 capítulo de livro</h1>
                            <h2>Sequência atual: 3 dias</h2>
                            <h2>Seu recorde: 5 dias</h2>
                        </div>
                        <CheckButton>
                            <CheckmarkOutline
                                color={'#fff'}
                                height="50px"
                                width="50px"
                            />
                        </CheckButton>
                    </HabitCard>
                </ul>
            </Container>
            <Footer />
        </Body>
    );
}

