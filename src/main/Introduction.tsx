import React from "react";
import { styled } from "styled-components";

const Div = styled.div`
  border: solid;
  border-color: blue;
`;

export const Introduction = () => {
  return (
    <Div>
      <p>Hello yeslee World!</p>
      <p>안녕하세요. 이예신입니다.</p>
      <div>
        <a href="yeslee5004@gmail.com">email: yeslee5004@gmail.com</a>
      </div>
      <div>
        <a href="https://github.com/yeslee-v">https://github.com/yeslee-v</a>
      </div>
      <div>
        <a href="https://medium.com/@yeslee-v">https://medium.com/@yeslee-v</a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/yeshinlee/">
          https://www.linkedin.com/in/yeshinlee/
        </a>
      </div>
    </Div>
  );
};

export default Introduction;
