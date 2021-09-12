import styled from "styled-components";
export default function Header() {
    return (
        <TopBar>
            <h1>TrackIt</h1>
            <img src="https://http2.mlstatic.com/D_NQ_NP_640775-MLB40939406782_022020-O.jpg" alt="vovo" />
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