import React from "react";
import styled from "styled-components";

const ChatbotOptions = () => {
  return (
    <SOptionContainer>
      <div>1. 슈링크플레이션이 발생한 상품 찾기</div>
      <div>2. 스킴플레이션이 발생한 상품 찾기</div>
      <div>3. 특정 상품의 원재료 유사품 찾기</div>
      <div>4. 특정 상품을 즐겨찾기에 추가하기</div>
      <div>5. 2개의 상품 비교하기</div>
    </SOptionContainer>
  );
};

export default ChatbotOptions;

const SOptionContainer = styled.div`
  width: 224px;
  height: 126px;
  color: var(--True-White, var(--True-White, #fff));
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
  letter-spacing: 0.24px;

  background-color: rgb(25, 26, 31);
  padding: 10px;

  border-radius: 10px;

  margin-left: 50px;
`;
