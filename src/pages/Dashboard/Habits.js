import AddHabitCard from "./Components/AddHabitCard";
import Footer from "./Components/Footer";
import HabitCard from "./Components/HabitCard";
import { Body, TopBar, Container, TitlePage, BlueButton } from "./style";


export default function Habits() {
    return (
        <Body>
            <TopBar>
                <h1>TrackIt</h1>
                <img src="https://http2.mlstatic.com/D_NQ_NP_640775-MLB40939406782_022020-O.jpg" alt="vovo" />
            </TopBar>
            <Container>
                <TitlePage>
                    <h2> Meus hábitos </h2>
                    <BlueButton>
                        +
                    </BlueButton>
                </TitlePage>
                <AddHabitCard />
                <HabitCard />
            </Container>
            <Footer />
        </Body>
    );
}