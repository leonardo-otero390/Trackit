import styled from "styled-components";
const Body = styled.div`
position:absolute;
top:0; left:0;
background: #E5E5E5;
width: 100%;
height: 100%;
`
const Container = styled.main`
    width: 338px;
    margin: 100px auto;
    display:grid;
    gap:30px;

     .blue-title{
        font-size:23px;
        line-height:29px;
        color:#126BA5;
    }
    .grey-subtitle{
        font-size:18px;
        line-height:23px;
        color: #BABABA;

    }
`
export {Body, Container}