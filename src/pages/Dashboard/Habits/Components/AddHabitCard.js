import { TrackItInput } from "../../../../shared/styled-component/style";
import styled from "styled-components";
import WeekDayOptions from "./WeekDayOptions";

export default function AddHabitCard() {
    return (
        <>
            <AddHabitCardStyled>
                <CardInputs>
                    <TrackItInput type="text" placeholder="nome do hábito" style={{ width: "303px" }} />
                    <WeekDayOptions/>
                </CardInputs>
                <CardButtons>
                    <li>
                        <CancelButton>Cancelar</CancelButton>
                        <EnterButton>Entrar</EnterButton>
                    </li>
                </CardButtons>
            </AddHabitCardStyled>
            <AddAlert>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </AddAlert>
        </>
    );
}

const AddHabitCardStyled = styled.form`
width: 340px;
height: 180px;
background: #FFFFFF;
border-radius: 5px;
display:flex;
flex-direction: column;
align-items: center;
justify-content:space-around;
`

const CardInputs = styled.div`
display:grid;
grid-template-columns:auto;
gap:10px;
`
const CardButtons = styled.ul`
    display: flex;
    justify-content: flex-end;
    width: 303px;
    button{
        font-size:16px;
        width: 84px;
        height: 35px;
    }
`
const EnterButton = styled.button`
color:#fff;
background: #52B6FF;
border-radius: 4.63636px;
border:none;
`
const CancelButton = styled.button`
color:#52B6FF;
background:none;
border:none;
`
const AddAlert = styled.p`
color:#666666;
        font-size:18px;
        line-height:22px;
`