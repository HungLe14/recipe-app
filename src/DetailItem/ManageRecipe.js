import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useRecipesContext } from "../components/store/context";

export const ManageRecipe = () => {
  const recipeCtx = useRecipesContext();
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
          recipeCtx.setIsEditting(true);
          navigate("/recipes/form");
        }}
      >
        Edit Recipe
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => {
          recipeCtx.onDeleteRecipe(recipeCtx.number);
          recipeCtx.setDetailShowing(false);
        }}
      >
        Delete Recipe
      </Dropdown.Item>
    </DropdownButton>
  );
};
