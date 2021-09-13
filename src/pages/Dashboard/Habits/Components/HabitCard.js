import { useContext } from "react";
import { TrashOutline } from "react-ionicons";
import styled from "styled-components";
import UserContext from "../../../../contexts/UserContext";
import { RequestDeleteHabit } from "../../../../Services/API";
import WeekDayOptions from "./WeekDayOptions";

export default function HabitCard({ id, name, days, setHabits }) {
    const { userData } = useContext(UserContext);
    const { token } = userData;
    function DeleteHabit() {
        const confirm = prompt("Digite sim para deletar");
        if (confirm === "sim") RequestDeleteHabit(id, token, setHabits);
    }
    return (
        <HabitCardStyled>
            <h1>{name}</h1>
            <WeekDayOptions daysOn={days} />
            <DeleteButton onClick={DeleteHabit}>
                <TrashOutline
                    color={'#666666'}
                    width="15px"
                    height="15px"
                />
            </DeleteButton>
        </HabitCardStyled>
    );
}
const DeleteButton = styled.button`
position: absolute;
top:10px;
right:10px;
background:none;
border:none;
`
const HabitCardStyled = styled.div`
position:relative;
width: 340px;
height: 91px;
background: #FFFFFF;
border-radius: 5px;
display:flex;
flex-direction: column;
justify-content: space-evenly;
padding-left:14px;

h1{
    font-size:20px;
    color:#666666;
}
`
