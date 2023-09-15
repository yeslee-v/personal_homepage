import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 20%;

  border: solid;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 30px;
`;

const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 20px;
`;

const InfoBox = styled.div`
  width: 50%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const LogoBox = styled.img`
  margin-right: 5px;
`;

const Introduction = () => {
  return (
    <Wrapper>
      <ImgBox>
        <img src="images/potato.png" alt="profile" width={400} height={400} />
        Yeshin Lee
      </ImgBox>
      <InfoBox>
        <a href="mailto:yeslee5004@gmail.com">
          {" "}
          <LogoBox src="images/email.png" width={30} height={20} />
        </a>
        <a href="https://github.com/yeslee-v">
          <LogoBox src="images/github-mark.png" width={30} height={30} />
        </a>
        <a href="https://medium.com/@yeslee-v">
          <LogoBox src="images/medium-mark.png" width={40} height={30} />
        </a>
        <a href="https://www.linkedin.com/in/yeshinlee/">
          <LogoBox src="images/linkedin-mark.png" width={30} height={30} />
        </a>
      </InfoBox>
    </Wrapper>
  );
};

export default Introduction;
