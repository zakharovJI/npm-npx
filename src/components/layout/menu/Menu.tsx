import React from "react";
import styled from "styled-components";

const StyledMenu = styled.menu`
  height: 500px;
  width: 250px;
  background-color: blue;
`;

const Menu: React.VFC = (): JSX.Element => {
  return <StyledMenu />;
};

export default Menu;
