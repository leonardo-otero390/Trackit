import styled from "styled-components";
const Body = styled.div`
position:absolute;
top:0; left:0;
background: #E5E5E5;
width: 100%;
height: 100%;
`
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
const Container = styled.main`
    width: 338px;
    margin: 100px auto;
    display:grid;
    gap:30px;

    h2{
        font-size:23px;
        color:#126BA5;
    }
    p{
        color:#666666;
        font-size:18px;
        line-height:22px;
    }
`
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
export {Body, TopBar, Container, TitlePage, BlueButton}