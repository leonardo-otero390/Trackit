import { Link } from "react-router-dom";
import styled from "styled-components";
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Footer() {
    const percentage = 25;
    return (
        <Navbar>
            <Link to="/habitos">
                <WhiteButton>
                    Hábitos
                </WhiteButton>
            </Link>
            <Link to="/hoje">
                <BlueCircle>
                    <CircularProgressbar
                        value={percentage}
                        text={"Hoje"}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#52B6FF",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent",
                        })}
                    />
                </BlueCircle>
            </Link>
            <Link to="historico">
                <WhiteButton>
                    Histórico
                </WhiteButton>
            </Link>
        </Navbar>
    );
}

const Navbar = styled.nav`
display:flex;
justify-content:space-around;
align-items:center;
position: fixed;
bottom:0;
left:0;
width: 100%;
height: 70px;
background: #FFFFFF;

`
const WhiteButton = styled.button`
    font-size:18px;
    color:#52B6FF;
    border:none;
    background:inherit;
`
const BlueCircle = styled.button`
position:relative;
bottom:10px;
width: 91px;
height: 91px;
background:none;
border:none;
`