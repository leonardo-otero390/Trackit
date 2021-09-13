import { useState } from "react";
import styled from "styled-components";

export default function WeekDayOptions({ daysOn }) {
    const [enabled,setEnabled] = useState(false);
    const daysList = [
        { name: "D", id: 1 },
        { name: "S", id: 2 },
        { name: "T", id: 3 },
        { name: "Q", id: 4 },
        { name: "Q", id: 5 },
        { name: "S", id: 6 },
        { name: "S", id: 7 }
    ]

    if (!!daysOn) {
        return (
            <WeekDayOptionsStyled>
                {daysList.map(day => <DayOption habitDay={daysOn.includes(day.id)} key={day.id} >{day.name}</DayOption>)}
            </WeekDayOptionsStyled>
        );
    }
    return (
        <WeekDayOptionsStyled>
            {daysList.map(day => <DayOption onClick={()=>setEnabled(!enabled)}habitDay={enabled} key={day.id} >{day.name}</DayOption>)}
        </WeekDayOptionsStyled>
    );
}
function DayOption (){

    return ()
}
const WeekDayOptionsStyled = styled.ul`
display:grid;
grid-template-columns: repeat(7, 30px);
gap:4px;
`
const DayOption = styled.li`
width: 30px;
height: 30px;

background:${props => props.habitDay ? "#CFCFCF" : "#FFFFFF"} ;
border: 1px solid #D5D5D5;
border-radius: 5px;
font-size:20px;
color:#dbdbdb;
display:flex;
justify-content: center;
align-items: center;
`