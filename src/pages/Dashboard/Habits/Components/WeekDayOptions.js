import styled from "styled-components";
export default function WeekDayOptions() {
    return (
        <WeekDayOptionsStyled>
            <DayOption>
                D
            </DayOption>
            <DayOption>
                S
            </DayOption>
            <DayOption>
                T
            </DayOption>
            <DayOption>
                Q
            </DayOption>
            <DayOption>
                Q
            </DayOption>
            <DayOption>
                S
            </DayOption>
            <DayOption>
                S
            </DayOption>
        </WeekDayOptionsStyled>
    );
}
const WeekDayOptionsStyled = styled.ul`
display:grid;
grid-template-columns: repeat(7, 30px);
gap:4px;
`
const DayOption = styled.li`
width: 30px;
height: 30px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
font-size:20px;
color:#dbdbdb;
display:flex;
justify-content: center;
align-items: center;
`