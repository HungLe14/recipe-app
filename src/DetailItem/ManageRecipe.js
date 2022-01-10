import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const ManageRecipe = () => {
  const navigate = useNavigate();
  return (
    <DropdownButton id="dropdown-basic-button" title="Manage Recipe">
      <Dropdown.Item
        onClick={() => {
          navigate("/shopping-list");
        }}
      >
        To Shopping List
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => {
          navigate("/recipes/form");
        }}
      >
        Edit Recipe
      </Dropdown.Item>
      <Dropdown.Item>Delete Recipe</Dropdown.Item>
    </DropdownButton>
  );
};
