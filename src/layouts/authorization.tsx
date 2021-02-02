import React from "react";
import styled from "styled-components";
import { media } from "@/helpers/index";
import { Header, Menu } from "@/components/layout/index";
import { Container } from "@/components/basic/index";

const StyledContent = styled.div`
  display: flex;
`;

const StyledDefault = styled.div`
  flex: 1;
`;

const Default: React.VFC<DefaultProps> = ({ children }): JSX.Element => {
  return (
    <Container>
      <Header />
      <StyledContent>
        <Menu />
        <StyledDefault>{children}</StyledDefault>
      </StyledContent>
    </Container>
  );
};

interface DefaultProps {
  children: JSX.Element | JSX.Element[];
}

export default Default;
