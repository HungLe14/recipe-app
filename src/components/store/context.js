import React, { useContext, useState } from "react";

export const recipesContext = React.createContext({
  recipe: [],
  setRecipe: () => {},
});

export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  return (
    <recipesContext.Provider
      value={{
        recipe: recipes,
        setRecipe: setRecipes,
      }}
    >
      {children}
    </recipesContext.Provider>
  );
};

export const useRecipesContext = () => useContext(recipesContext);
