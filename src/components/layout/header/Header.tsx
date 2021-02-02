import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  height: 60px;
  background-color: red;
`;

const Header: React.VFC<IHeader> = (props): JSX.Element => {
  const { layout = "default" } = props;

  return <StyledHeader />;
};

interface IHeader {
  layout?: string;
}

export default Header;
