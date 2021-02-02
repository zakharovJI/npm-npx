import React from "react";
import styled from "styled-components";
import { media } from "@/helpers/index";
import { Header, Menu } from "@/components/layout/index";
import { Container } from "@/components/basic/index";

const StyledAuthorization = styled.div`
  width: 100%;
`;

const Authorization: React.VFC<IAuthorization> = ({
  children,
}): JSX.Element => {
  return (
    <Container>
      <Header layout="authorization" />
      <StyledAuthorization>{children}</StyledAuthorization>
    </Container>
  );
};

interface IAuthorization {
  children: JSX.Element | JSX.Element[];
}

export default Authorization;
