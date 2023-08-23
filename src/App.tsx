import React from "react";
import styled from "styled-components";
import { Introduction } from "./main/Introduction";

const Wrapper = styled.section`
  border: solid;
  border-width: 5px;
  background: skyblue;
`;

export const App: React.FC = () => {
  return (
    <Wrapper>
      <Introduction />
    </Wrapper>
  );
};

export default App;
