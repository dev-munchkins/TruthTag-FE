import React from "react";
import styled from "styled-components";
import BackArrow from "@assets/svg/Arrow back ios new (1).svg";
import ProductImage from "../../../../public/assets/Product Image.png";
import Image from "next/image";
import SkimIcon from "@assets/svg/Question exchange.svg";
import ShrinkUpIcon from "@assets/svg/Trending up.svg";
import ShrinkDownIcon from "@assets/svg/Trending down.svg";
import { useRouter } from "next/router";
import Footer from "@components/common/Footer";

const Index = () => {
  const router = useRouter();
  return (
    <div style={{ padding: "0px 24px", height: "100vh", overflowY: "scroll" }}>
      <Header>
        <BackArrow onClick={() => router.back()} />
        <span>알림</span>
        <div style={{ width: "24px" }}></div>
      </Header>

      {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((item, key) => (
        <div key={key}>
          <NotificationItem onClick={() => router.push("/detail")}>
            <ImageContainer>
              <SkimIcon style={{ marginTop: "8px" }} />
            </ImageContainer>

            <InfoSection>
              <InfoTitle>
                <SkimShrinkTag>Skim</SkimShrinkTag>
                <Date>2024.02.02</Date>
              </InfoTitle>
              <InfoContent>
                <span>컵누들</span>의 원재료가 변경되었어요!
              </InfoContent>
            </InfoSection>
          </NotificationItem>
        </div>
      ))}

      <Footer clicked="mypage" />
    </div>
  );
};

export default Index;

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

  padding: 16px;
  display: flex;
`;

const ImageContainer = styled.div`
  width: 60px;
  height: 60px;

  border-radius: 100px;
  background: url(/assets/svg/camera-sample-food.svg) center center;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoSection = styled.div`
  margin-left: 16px;

  width: 219px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

const SkimShrinkTag = styled.div`
  min-width: 36px;
  height: 16px;
  flex-shrink: 0;

  background-color: var(--True-Yellow, #ebff00);
  color: black;
  border-radius: 100px;

  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Date = styled.div`
  color: var(--TP-White, rgba(255, 255, 255, 0.7));
  font-family: "Noto Sans KR";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const InfoContent = styled.div`
  color: var(--TP-White, rgba(255, 255, 255, 0.7));
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.24px;

  margin-bottom: 8px;

  & > span {
    color: var(--True-Yellow, #ebff00);
  }
`;
