import styled from "styled-components";
import React from "react";

const Wrapper = styled.div`
  margin-top: 30px;
`;

export const BodyWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
