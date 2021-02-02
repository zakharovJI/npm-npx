import React from "react";
import styled, { css } from "styled-components";
import { media } from "@/helpers/index";

const StyledContainer = styled.div<{ flexColumn: boolean }>`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 28px;
  
  ${props => props.flexColumn && css`
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

const Container: React.VFC<ContainerProps> = ({
  children,
  flexColumn = false,
}): JSX.Element => {
  return <StyledContainer flexColumn={flexColumn}>{children}</StyledContainer>;
};

interface ContainerProps {
  children: JSX.Element | JSX.Element[];
  flexColumn?: boolean;
}

export default Container;
