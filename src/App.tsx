import React from "react";
import styled from "styled-components";
import { NextPage } from "next";
import Board from "./main/Board";
import Introduction from "./main/Introduction";

const Wrapper = styled.div`
  height: 100%;

  display: flex;
  flex-direction: row;
`;

const App: NextPage = () => {
  return (
    <Wrapper>
      <Introduction />
      <Board />
    </Wrapper>
  );
};

export default App;
