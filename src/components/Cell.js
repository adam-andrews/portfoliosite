import React from "react";
import styled from "styled-components";
const CellGroup = styled.div`
  display: flex;
  align-items: center;
  max-width: 146px;
`;

const CellImage = styled.img`
  width: 24px;
  height: 24px;
  margin: 0 10px;
`;

const CellTitle = styled.div`
  color: ${props => props.textColor ? "black" : "white"};
  font-size: 15px;
  padding: 20px 0;
`;

const Cell = (props) => (
  <CellGroup>
    <CellImage src={require("../Images/Header/" + props.image).default} />
    <CellTitle>{props.title} {props.textColor}</CellTitle>
  </CellGroup>
);

export default Cell;
