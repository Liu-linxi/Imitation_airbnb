import styled from "styled-components";

export const HomeWrapper = styled.div`
    >.content{
    width: 1032px;
    margin: 0 auto;
  }
  .good-price{
    margin-top: 30px;
    .room-list{
      display: grid;
      grid-template-columns: repeat(${props => props.numCol},1fr);
      grid-gap: 40px 30px;
    } 
  }
`