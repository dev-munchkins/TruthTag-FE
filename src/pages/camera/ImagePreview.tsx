import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ChatIcon from "@assets/svg/image-chat.svg";
import SearchIcon from "@assets/svg/image-search.svg";
import SampleImage from "@assets/svg/camera-sample-food.svg";
import LikeButton from "@assets/svg/heart-broken.svg";
import { useRouter } from "next/router";

interface ChildProps {
  dataUri: string;
  isFullscreen: boolean;
  setDataUri: React.Dispatch<React.SetStateAction<string>>;
}

export const ImagePreview = ({
  dataUri,
  isFullscreen,
  setDataUri,
}: ChildProps) => {
  let classNameFullscreen = isFullscreen ? "demo-image-preview-fullscreen" : "";

  const router = useRouter();
  return (
    <div className={"demo-image-preview " + classNameFullscreen}>
      <ProductContainer>
        <SampleImage />
        <ProductText>
          <ProductName>컵누들 매콤한 맛</ProductName>
          <ProductCompany>오뚜기</ProductCompany>
          <Reivew>리뷰 (365)</Reivew>
        </ProductText>
        <LikeButtonContainer>
          <LikeButton style={{ marginLeft: "6px" }}></LikeButton>
        </LikeButtonContainer>
      </ProductContainer>
      <ButtonContainer>
        <Button>
          <ChatIcon /> 추천 챗봇
        </Button>
        <Button onClick={() => router.push("/detail")}>
          <SearchIcon />
          상품 상세
        </Button>
      </ButtonContainer>
      <RetryButtonContainer onClick={() => setDataUri("")}>
        <RetryVector onClick={() => setDataUri("")}></RetryVector>
      </RetryButtonContainer>
      <img src={dataUri} />
    </div>
  );
};

ImagePreview.propTypes = {
  dataUri: PropTypes.string,
  isFullscreen: PropTypes.bool,
};

export default ImagePreview;

const ProductContainer = styled.div`
  border-radius: 10px;
  background: #191a1f;

  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);

  width: 327px;
  height: 104px;

  padding: 16px;
  margin-top: 64px;
  margin-left: 24px;

  z-index: 10;

  position: absolute;

  display: flex;
`;

const ButtonContainer = styled.div`
  margin-left: 24px;
  margin-top: 188px;

  display: flex;
  gap: 16px;

  position: absolute;
`;

const Button = styled.button`
  display: inline-flex;
  padding: 12px 29px;
  justify-content: center;
  align-items: center;
  gap: 16px;

  border-radius: 10px;
  background: #191a1f;

  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);

  width: 155px;

  color: white;
`;

const RetryButtonContainer = styled.button`
  background: var(--Truth-Yellow, #ebff00);
  width: 36px;
  height: 36px;
  border-radius: 100px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  z-index: 13;

  margin-left: 170px;

  margin-top: 500px;
  position: absolute;
`;

const RetryVector = styled.button`
  background-image: url(assets/svg/camera-vector.svg);
  background-size: cover;
  background-repeat: no-repeat;
  background-color: transparent;

  z-index: 14;

  width: 30px;
  height: 30px;

  margin: 3px 0 0 3px;
`;

const ProductText = styled.div`
  margin-left: 17px;
  width: 160px;
`;

const ProductName = styled.div`
  color: var(--Pale-White, var(--True-White, #fff));
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  margin-top: 4px;
`;

const ProductCompany = styled.div`
  color: var(--Pale-White, var(--True-White, #fff));
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-top: 5px;
`;

const Reivew = styled.div`
  color: var(--Ewha-Gray, #b9b9b9);
  font-family: "Noto Sans KR";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.2px;

  margin-top: 11px;
`;

const LikeButtonContainer = styled.div`
  width: 24px;
  height: 24px;

  border-radius: 100px;
  background-color: var(--Truth-Yellow, #ebff00);

  margin-left: 20px;
  margin-top: 3px;
`;
