import styled from "styled-components";
const HabitCard = styled.li`
width: 340px;
height: 94px;
background: #FFFFFF;
border-radius: 5px;
display:flex;
justify-content:space-around;
align-items:center;
h1{
    font-size:20px;
    color: #666666;
    margin-bottom:7px;
}
h2{
    font-size:13px;
    color: #666666;
}
`
const CheckButton = styled.button`
width: 69px;
height: 69px;
background: #8FC549;
border:none;
border-radius: 5px;
`
export { HabitCard, CheckButton }