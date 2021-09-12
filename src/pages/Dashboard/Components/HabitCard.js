import { TrashOutline } from "react-ionicons";
import styled from "styled-components";
import WeekDayOptions from "./WeekDayOptions";

export default function HabitCard() {
    return (
        <HabitCardStyled>
            <h1>Habit Title</h1>
            <WeekDayOptions />
            <DeleteButton>
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
