import React, { useContext, useState } from "react";

export const recipesContext = React.createContext({
  recipe: [],
  setRecipe: () => {},
  number: "",
  setNumber: () => {},
});

export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [index, setIndex] = useState("");

  return (
    <recipesContext.Provider
      value={{
        recipe: recipes,
        setRecipe: setRecipes,
        number: index,
        setNumber: setIndex,
      }}
    >
      {children}
    </recipesContext.Provider>
  );
};

export const useRecipesContext = () => useContext(recipesContext);
