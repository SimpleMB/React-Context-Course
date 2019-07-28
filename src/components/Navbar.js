import React, { useContext } from "react";
import styled from "styled-components";
import { ThContext } from "../contexts/ThContext";

function Navbar() {
  const {isLightTheme, light, dark} = useContext(ThContext);
  const theme = isLightTheme ? light : dark;

  // ************ STYLES ***************
  const Nav = styled.nav`
  padding: 20px 5px;
  background-color: ${theme.ui};
  color: ${theme.syntax};
  `;
  const Heading = styled.h1`
    padding-bottom: 20px;
    /* background-color: ${theme.ui}; */
  `;
  const Ul = styled.ul`
    list-style: none;
  `;
  const Li = styled.li`
    display: inline-block;
    margin: 0 10px;
    cursor: pointer;
  `;

  return (
    <Nav>
        <Heading>Context app</Heading>
        <Ul>
          <Li>Home</Li>
          <Li>About</Li>
          <Li>Contact</Li>
        </Ul>
      </Nav>
  )
}

export default Navbar