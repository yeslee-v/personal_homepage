import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 20%;

  border: solid;
`;

const Introduction = () => {
  return (
    <Wrapper>
      <div>이미지 삽입</div>
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
    </Wrapper>
  );
};

export default Introduction;
