import styled from "styled-components"

export const RoomsWrapper = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  margin: 0 -8px; */
  display: grid;
  grid-template-columns: repeat(${props => props.itemWidth},1fr);
  grid-gap: 40px 30px;
`