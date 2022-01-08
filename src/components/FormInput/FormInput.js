import React, { useState, useEffect } from "react";
import { Btn } from "../Button/Btn";
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { DisplayFlex } from "../Global";
import { useNavigate } from "react-router-dom";
import { useValidate } from "../../hooks/useValidate";
import { useRecipesContext } from "../store/context";

export const FormInput = () => {
  const [imgValid, setImgValid] = useState(false);
  const [ingredient, setIngredient] = useState(false);
  const [listIngredient, setListIngredient] = useState([]);
  let urlValid;
  const navigate = useNavigate();
  const recipesCtx = useRecipesContext();

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useValidate((value) => value.trim() !== "");

  const {
    value: enteredUrl,
    isValid: enteredUrlIsValid,
    hasError: urlInputHasError,
    valueChangeHandler: urlChangedHandler,
    inputBlurHandler: urlBlurHandler,
    reset: resetUrlInput,
  } = useValidate((value) => value.includes("https://"));

  const {
    value: enteredDes,
    isValid: enteredDesIsValid,
    hasError: desInputHasError,
    valueChangeHandler: desChangedHandler,
    inputBlurHandler: desBlurHandler,
    reset: resetDesInput,
  } = useValidate((value) => value.trim() !== "");

  const {
    value: enteredIng,
    isValid: enteredIngIsValid,
    hasError: ingInputHasError,
    valueChangeHandler: ingChangedHandler,
    inputBlurHandler: ingBlurHandler,
    reset: resetIngInput,
  } = useValidate((value) => value.trim() !== "");

  const {
    value: enteredNum,
    isValid: enteredNumIsValid,
    hasError: numInputHasError,
    valueChangeHandler: numChangedHandler,
    inputBlurHandler: numBlurHandler,
    reset: resetNumInput,
  } = useValidate((value) => value.trim() !== "");

  const checkUrlValid = () => {
    if (enteredUrl !== urlValid) {
      setImgValid(false);
    }
  };

  const fetchURL = async (url) => {
    if (url) {
      const res = await fetch(url);
      if (res.ok) {
        urlValid = url;
        setImgValid(true);
      }
    }
  };

  useEffect(() => {
    fetchURL(enteredUrl);
    checkUrlValid();
  }, [enteredUrl]);

  const addIngredientHandler = () => {
    setIngredient(true);
    const row = [...listIngredient];
    row.push("");
    setListIngredient([...row]);
  };

  const removeIngredientHandler = (index) => {
    const ingredients = [...listIngredient];
    ingredients.splice(index, 1);
    setListIngredient([...ingredients]);
  };

  const updateNameIngredient = (nameIng, index) => {
    const newIngredient = [...listIngredient];
    newIngredient[index] = {
      alias: nameIng,
      quantity: listIngredient[index]?.quantity,
    };
    setListIngredient([...newIngredient]);
  };

  const updateNumIngredient = (number, index) => {
    const newIngredient = [...listIngredient];
    newIngredient[index] = {
      alias: listIngredient[index]?.alias,
      quantity: number,
    };
    setListIngredient([...newIngredient]);
  };

  const submitHandler = () => {
    if (
      !enteredNameIsValid ||
      !enteredUrlIsValid ||
      !enteredDesIsValid ||
      !enteredIngIsValid ||
      !enteredNumIsValid
    ) {
      return;
    }

    const arrRecipes = [...recipesCtx.recipe];
    arrRecipes.push({
      name: enteredName,
      url: enteredUrl,
      description: enteredDes,
      ingredients: [...listIngredient],
    });
    recipesCtx.setRecipe([...arrRecipes]);

    resetNameInput();
    resetUrlInput();
    resetDesInput();
    resetIngInput();
    resetNumInput();
    setIngredient(false);
    navigate("/recipes");
  };

  const cancelHandler = () => {
    navigate("/recipes");
  };

  return (
    <React.Fragment>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          submitHandler();
        }}
      >
        <Row>
          <div>
            <Btn
              submitting={true}
              isSuccess={true}
              isDisabled={
                !enteredNameIsValid ||
                !enteredUrlIsValid ||
                !enteredDesIsValid ||
                !enteredIngIsValid ||
                !enteredNumIsValid
              }
            >
              Save
            </Btn>

            <Btn onCancel={cancelHandler} isSuccess={false}>
              Cancel
            </Btn>
          </div>
        </Row>
        <Row>
          <Form.Group className="col-md-10">
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control
              type="text"
              id="name"
              value={enteredName}
              onChange={nameChangedHandler}
              onBlur={nameBlurHandler}
              style={{ border: nameInputHasError ? "1px solid red" : "" }}
            ></Form.Control>
            {nameInputHasError && (
              <p style={{ color: "red" }}>Please input your name</p>
            )}
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="col-md-10">
            <Form.Label htmlFor="image">Image URL</Form.Label>
            <Form.Control
              type="url"
              id="image"
              value={enteredUrl}
              onChange={urlChangedHandler}
              onBlur={urlBlurHandler}
              style={{ border: urlInputHasError ? "1px solid red" : "" }}
            ></Form.Control>
            {urlInputHasError && <p style={{ color: "red" }}>Url not valid</p>}
            {imgValid && <img alt={"Preview"} src={enteredUrl}></img>}
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="col-md-10">
            <Form.Label htmlFor="discription">Description</Form.Label>
            <Form.Control
              as="textarea"
              id="discription"
              value={enteredDes}
              onChange={desChangedHandler}
              onBlur={desBlurHandler}
              style={{
                height: "200px",
                border: desInputHasError ? "1px solid red" : "",
              }}
            ></Form.Control>
            {desInputHasError && (
              <p style={{ color: "red" }}>
                Please input description of your recipe
              </p>
            )}
          </Form.Group>
        </Row>
        {ingredient &&
          listIngredient.map((ingredient, index) => {
            return (
              <Row key={index} style={{ marginTop: "20px" }}>
                <DisplayFlex>
                  <Form.Group className="col-md-5">
                    <Form.Control
                      type="text"
                      value={ingredient?.alias}
                      onChange={(event) => {
                        ingChangedHandler(event);
                        updateNameIngredient(event.target.value, index);
                      }}
                      onBlur={ingBlurHandler}
                      style={{
                        border: ingInputHasError ? "1px solid red" : "",
                      }}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="col-md-2">
                    <Form.Control
                      type="number"
                      min="1"
                      value={ingredient?.quantity}
                      onChange={(event) => {
                        numChangedHandler(event);
                        updateNumIngredient(event.target.value, index);
                      }}
                      onBlur={numBlurHandler}
                      style={{
                        border: numInputHasError ? "1px solid red" : "",
                      }}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="col-md-5">
                    <Btn
                      submitting={false}
                      isSuccess={false}
                      orderNumber={index}
                      onRemoveRecipe={removeIngredientHandler}
                    >
                      X
                    </Btn>
                  </Form.Group>
                </DisplayFlex>
              </Row>
            );
          })}
      </Form>
      <Row style={{ marginTop: "20px" }}>
        <Form.Group className="col-md-4">
          <Btn
            submitting={false}
            isSuccess={true}
            onAddRecipe={addIngredientHandler}
          >
            Add ingredient
          </Btn>
        </Form.Group>
      </Row>
    </React.Fragment>
  );
};
