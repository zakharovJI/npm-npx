import React from "react";
import styled from "styled-components";
import Authorization from "@/layouts/authorization";

const StyledLogin = styled.div`
  height: 100%;
`;

const Login: React.VFC = (): JSX.Element => {
  return (
    <Authorization>
      <StyledLogin>
        <div>This is Login</div>
      </StyledLogin>
    </Authorization>
  );
};

export default Login;
