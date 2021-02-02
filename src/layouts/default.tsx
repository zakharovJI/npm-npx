import React from "react";
import styled from "styled-components";
import { media } from "@/helpers/index";
import WhiteNoise from "../components/WhiteNoise";

const StyledDefault = styled.div`
  width: 100%;
  padding-bottom: 120px;  

  ${media.tablet} {
    padding-bottom: 160px;
  }
`;

const Default: React.VFC<DefaultProps> = ({ children }): JSX.Element => {
  return (
    <>
      <WhiteNoise />
      <StyledDefault>{children}</StyledDefault>
    </>
  );
};

interface DefaultProps {
  children: JSX.Element | JSX.Element[];
}

export default Default;
