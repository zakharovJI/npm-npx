import React from "react";
import { media } from "@/helpers/index";
import styled, { css } from "styled-components";

const StyledContainer = styled.div<{ flexColumn: boolean }>`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 28px;
  height: 100%;

  ${(props) =>
    props.flexColumn &&
    css`
      display: flex;
      flex-direction: column;
      flex: 1;
    `}

  ${media.tablet} {
    padding: 0 40px;
  }

  ${media.tabletM} {
    padding: 0 44px;
  }
  ${media.laptop} {
    padding: 0 80px;
  }
  ${media.desktop} {
    padding: 0 64px;
  }
`;

const Container: React.VFC<IContainer> = ({
  children,
  flexColumn = false,
}): JSX.Element => {
  return <StyledContainer flexColumn={flexColumn}>{children}</StyledContainer>;
};

interface IContainer {
  children: JSX.Element | JSX.Element[];
  flexColumn?: boolean;
}

export default Container;
