import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavWrap = styled.nav`
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #eee;

  & ul {
    margin: 0;
    padding: 0 10px;
    list-style: none;
    display: flex;
    gap: 10px;
  }

  & ul > li {
    height: 40px;
  }

  & li > a {
    display: inline-block;
    width: 100%;
    height: 40px;
    padding: 0 10px;
    text-decoration: none;
    color: #000;
  }

  & li > a.active {
    background-color: #ccc;
  }
`;

export const Nav = () => {
  return (
    <NavWrap>
      <ul>
        <li>Recipe Book</li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "")}
            to="/recipes"
          >
            Recipes
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "")}
            to="/shopping-list"
          >
            Shopping List
          </NavLink>
        </li>
      </ul>
    </NavWrap>
  );
};
