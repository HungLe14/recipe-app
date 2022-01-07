import React from "react";
import styled from "styled-components";

const BtnAll = styled.button`
  background-color: ${(props) => (props.isSuccess ? "green" : "red")};
  border: none;
  border-radius: 5px;
  color: #fff;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const Btn = ({
  children,
  isSuccess,
  onRecipe,
  isDisabled,
  onCancel,
}) => {
  return (
    <BtnAll
      isSuccess={isSuccess}
      onClick={() => {
        if (onRecipe) {
          onRecipe();
        }
        if (onCancel) {
          onCancel();
        }
      }}
      disabled={isDisabled}
    >
      {children}
    </BtnAll>
  );
};
