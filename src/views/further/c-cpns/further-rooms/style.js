import styled from "styled-components";


export const RoomsWrapper = styled.div`
  padding: 40px 20px;
  .title{
    font-size: 22px;
    color: #222;
  }
  .list{
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(5,1fr);
    grid-gap: 28px 22px;
  }
  
  >.cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255,255,255,.8);
  }
`