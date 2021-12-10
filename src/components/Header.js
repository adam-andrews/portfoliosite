import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactIcon from '../Images/Header/ContactIcon.svg';
import styled from "styled-components";
import Cell from "./Cell";
const Header__container = styled.div`
  margin-right: 25%;
  margin-left: auto;
  background-color: #033020;
  height: 64px;
  width: 403px;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  display: flex;
  justify-content: space-between;


  @media (max-width: 768px) {
    margin-right: auto;
    margin-left: auto;
    justify-content: space-between;
  }

`;

const Header__button = styled.button`
  margin-top: 8px;
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
const Header__link = styled(Link)`
text-decoration: none;
`;


function Header() {
  return (
    <Header__container>
      <Header__link to="/Home">
        <Cell image="HomeIcon.svg" title="Home" />
      </Header__link>
      <Header__link to="/About">
        <Cell image="About Icon.svg" title="About" />
      </Header__link>
      <Header__link to="/Contact">
        <Header__button>
        </Header__button>
      </Header__link>
    </Header__container>
  );
}

export default Header;
