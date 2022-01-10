import React, { useContext, useState } from "react";

export const recipesContext = React.createContext({
  recipe: [],
  setRecipe: () => {},

  number: "",
  setNumber: () => {},

  isEditting: false,
  setIsEditting: () => {},

  detailShowing: false,
  setDetailShowing: () => {},

  onDeleteRecipe: () => {},
});

export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [index, setIndex] = useState("");
  const [isEditting, setIsEditting] = useState(false);
  const [detailRecipe, setDetailRecipe] = useState(false);

  const deleteRecipeHandler = (index) => {
    const newRecipes = [...recipes];
    newRecipes.splice(index, 1);
    setRecipes([...newRecipes]);
  };

  return (
    <recipesContext.Provider
      value={{
        recipe: recipes,
        setRecipe: setRecipes,
        number: index,
        setNumber: setIndex,
        isEditting,
        setIsEditting,
        detailShowing: detailRecipe,
        setDetailShowing: setDetailRecipe,
        onDeleteRecipe: deleteRecipeHandler,
      }}
    >
      {children}
    </recipesContext.Provider>
  );
};

export const useRecipesContext = () => useContext(recipesContext);
