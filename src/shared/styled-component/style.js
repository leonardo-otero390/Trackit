import styled from "styled-components"

const TrackItInput = styled.input`
height: 45px;
border: 1px solid #D5D5D5;
border-radius:5px;
padding-left:11px;
font-size:20px;
background:${props=> props.isLoading ? "#F2F2F2;": "#fff"};
::placeholder{
    color:${props=> props.isLoading ? "#afafaf": "#DBDBDB"};
}

`
export { TrackItInput }