import React from "react";
import Default from "../layouts/default";
import styled from "styled-components";

const StyledHome = styled.div`
  height: 100%;
`;

const Home: React.VFC = (): JSX.Element => {
  return (
    <Default>
      <StyledHome>
        <div>This is RAP</div>
      </StyledHome>
    </Default>
  );
};

export default Home;
