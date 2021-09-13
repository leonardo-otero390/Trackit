import AddHabitCard from "./Components/AddHabitCard";
import Footer from "../shared/components/Footer";
import HabitCard from "./Components/HabitCard";
import Header from "../shared/components/Header";
import { Body, Container } from "../shared/styled-component/style";
import { TitlePage, BlueButton, AddAlert } from "./style";
import { useContext, useState } from "react";
import UserContext from "../../../contexts/UserContext";
import { RequestHabits } from "../../../Services/API";

export default function Habits() {
    const { userData } = useContext(UserContext);
    const { token } = userData;
    const [addHabit, setAddHabit] = useState(false);
    const [habits, setHabits] = useState([
        {
            id: 1,
            name: "Nome do hábito",
            days: [1, 3, 5]
        },
        {
            id: 2,
            name: "Nome do hábito 2",
            days: [1, 3, 4, 6]
        }
    ]);
    RequestHabits(setHabits, token);
    function toggleAddHabitCard(){
        setAddHabit(true);
    }
    return (
        <Body>
            <Header />
            <Container>
                <TitlePage>
                    <h2 className="blue-title"> Meus hábitos </h2>
                    <BlueButton onClick={toggleAddHabitCard}>
                        +
                    </BlueButton>
                </TitlePage>
                    {addHabit ? <AddHabitCard /> : ""}
                {habits.length ?
                    habits.map(({ id, name, days }) => <HabitCard key={id} id={id} name={name} days={days} setHabits={setHabits} />)
                    :
                    <AddAlert>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </AddAlert>}
            </Container>
            <Footer />
        </Body>
    );
}