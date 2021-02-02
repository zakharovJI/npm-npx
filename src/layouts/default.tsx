import React from "react";
import styled from "styled-components";
import { Header, Menu } from "@/components/layout/index";
import { Container } from "@/components/basic/index";

const StyledContent = styled.div`
  margin-top: 60px;
  display: flex;
`;

const StyledDefault = styled.div`
  min-height: 100vh;
`;

const StyledView = styled.div`
  flex: 1;
  margin-left: 32px;
`;

const Default: React.VFC<IDefault> = ({ children }): JSX.Element => {
  return (
    <StyledDefault>
      <Container>
        <Header />
        <StyledContent>
          <Menu />
          <StyledView>{children}</StyledView>
        </StyledContent>
      </Container>
    </StyledDefault>
  );
};

interface IDefault {
  children: JSX.Element | JSX.Element[];
}

export default Default;
