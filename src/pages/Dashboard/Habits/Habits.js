import AddHabitCard from "./Components/AddHabitCard";
import Footer from "../shared/components/Footer";
import HabitCard from "./Components/HabitCard";
import Header from "../shared/components/Header";
import { Body, Container } from "../shared/styled-component/style";
import { TitlePage, BlueButton } from "./style";

export default function Habits() {
    return (
        <Body>
            <Header />
            <Container>
                <TitlePage>
                    <h2 className="blue-title"> Meus hábitos </h2>
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