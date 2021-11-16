import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Cell from "./Cell";
const Header__container = styled.div`
height:64px;
width:100%;
font-weight: 400;
line-height: 1.5;
color: #212529;
`



function Header() {
  return (
      <Header__container>
      <Link to="/prices">
            <Cell image="Content.svg" title="prices" />
      </Link>
      <Link to="/Account">
            <Cell image="Content.svg" />
          </Link>
          <Link to="/Account">
            <Cell image="Content.svg" />
          </Link>
          </Header__container>
  );
}

export default Header;

