import styled from "styled-components";
import React, { useContext } from "react";
import UserContext from "../../../../contexts/UserContext";

export default function Header() {
    const { userData} = useContext(UserContext);
    const {image} = userData;
    return (
        <TopBar>
            <h1>TrackIt</h1>
            <img src={image} alt="avatar" />
        </TopBar>
    );
}
const TopBar = styled.header`
    font-family: 'Playball', cursive;
    width: 100%;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position:fixed;
    left: 0px;
    top: 0px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 0 18px;
h1{
    font-size:40px;
    color:#fff;
}
img{
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
    object-fit:cover;
}
`