import styled from "styled-components";
const TitlePage = styled.div`
    display:flex;
    justify-content:space-between;
    align-items: center;
`
const BlueButton = styled.button`
width: 40px;
height: 35px;
background: #52B6FF;
border:none;
border-radius: 5px;
font-size:27px;
color: #fff;
display:flex;
align-items: center;
justify-content: center;
`
const AddAlert = styled.p`
color:#666666;
        font-size:18px;
        line-height:22px;
`
export {TitlePage, BlueButton, AddAlert}