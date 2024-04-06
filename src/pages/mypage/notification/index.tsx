import React from "react";
import styled from "styled-components";
import BackArrow from "@assets/svg/Arrow back ios new (1).svg";

const index = () => {
  return (
    <div style={{ padding: "0px 24px" }}>
      <Header>
        <BackArrow />
        <span>알림</span>
        <div style={{ width: "24px" }}></div>
      </Header>

      {[0, 0, 0, 0].map((item, key) => (
        <>
          <NotificationItem></NotificationItem>
        </>
      ))}
    </div>
  );
};

export default index;

const Header = styled.div`
  padding: 16px 0px;

  color: var(--True-White, var(--True-White, #fff));
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 225% */

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NotificationItem = styled.div`
  width: 327px;
  height: 92px;

  border-radius: 10px;
  background: var(--True-Light-BlueBlack, #191a1f);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);

  margin-bottom: 15px;
`;
