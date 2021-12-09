import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Cell from "./Cell";
const Header__container = styled.div`
  background-color: black;
  height: 64px;
  width: 100%;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  display: flex;
`;

const Header__button = styled.button`
  font-size: 10px;
  background: white;
  border: none;
  font-weight: 500;
  outline: none;
  cursor: pointer;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 1;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(31, 47, 71, 0.25);
  border-radius: 14px;
  padding: 10px 20px;
  width: 124px;
  height: 44px;
  `

function Header() {
  return (
    <Header__container>
      <Link to="/prices">
        <Cell image="HomeIcon.svg" title="Home" />
      </Link>
      <Link to="/Account">
        <Cell image="HomeIcon.svg" />
      </Link>
      <Link to="/Account">
        <Header__button>
        Contact
        </Header__button>
      </Link>
    </Header__container>
  );
}

export default Header;
