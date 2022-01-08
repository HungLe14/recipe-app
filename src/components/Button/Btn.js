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
  submitting,
  isSuccess,
  onRemoveRecipe,
  onAddRecipe,
  isDisabled,
  onCancel,
  orderNumber,
}) => {
  return (
    <BtnAll
      type={submitting ? "submit" : "click"}
      isSuccess={isSuccess}
      onClick={() => {
        if (onRemoveRecipe) {
          onRemoveRecipe(orderNumber);
        }

        if (onAddRecipe) {
          onAddRecipe(orderNumber);
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
