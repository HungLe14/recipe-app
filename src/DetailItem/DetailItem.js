import React from "react";
import styled from "styled-components";
import { PreviewImg } from "../components/Global";
import { ManageRecipe } from "./ManageRecipe";
import { useRecipesContext } from "../components/store/context";

export const DetailIngredient = styled.div`
  width: 85%;
  border: 0.5px solid #ddd;
  padding: 5px 10px;
`;

export const DetailItem = () => {
  const { number, recipe } = useRecipesContext();

  return (
    <React.Fragment>
      <PreviewImg>
        <img
          alt="Preview"
          src="NYC-Pizza-Hanoi-NYC-Pizza-Hanoi-1-1024x1024.jpeg"
          style={{ height: "100%" }}
        ></img>
      </PreviewImg>
      <h2>{recipe[number].name}</h2>
      <ManageRecipe></ManageRecipe>
      <p style={{ margin: "5px 0" }}>{recipe[number].description}</p>
      {recipe[number].ingredients.map((element) => {
        return (
          <DetailIngredient>
            {element.alias} - {element.quantity}
          </DetailIngredient>
        );
      })}
    </React.Fragment>
  );
};
