import React from "react";
import styled from "styled-components";

const SimilarResourceResult = (props: any) => {
  return (
    <FoundItemWrapper>
      <ProductInfoWrapper>
        <ItemImage />
        <ItemText>
          <ItemTitle>누들핏 육개장 맛</ItemTitle>
          <ItemFirm>농심</ItemFirm>
          <ItemReview>리뷰 (200)</ItemReview>
        </ItemText>
      </ProductInfoWrapper>
      <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
        <Button
          onClick={() => {
            props.setState((prev: any) => ({
              ...prev,
              thanksButtonClicked: true,
            }));
            props.actions.handleThanksButton();
          }}
        >
          고마워, 충분해!
        </Button>
        <Button>다른 상품도 보여줘.</Button>
      </div>
    </FoundItemWrapper>
  );
};

export default SimilarResourceResult;

const ProductInfoWrapper = styled.div`
  width: 234px;
  height: 104px;
  padding: 16px;
  border-radius: 10px;
  background: var(--True-Light-BlueBlack, #191a1f);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);
  gap: 17px;

  display: flex;
`;

const ItemImage = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 10px;
  background: url(assets/svg/ResourceReplaceImage.svg) lightgray 50% / cover
    no-repeat;
`;

const ItemText = styled.div``;

const ItemTitle = styled.div`
  color: var(--True-White, var(--True-White, #fff));
  font-family: "Noto Sans KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
`;

const ItemFirm = styled.div`
  color: var(--True-White, var(--True-White, #fff));
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px; /* 175% */
  margin-bottom: 10px;
`;

const ItemReview = styled.div`
  color: var(--TP-White, rgba(255, 255, 255, 0.7));
  font-family: "Noto Sans KR";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.2px;
`;

const FoundItemWrapper = styled.div`
  margin-left: 52px;
`;

const Button = styled.button`
  width: 113px;
  height: 29px;
  border-radius: 100px;
  background: var(--True-Gray, #7d7f82);
  display: flex;
  justify-content: center;
  align-content: center;

  color: var(--True-White, var(--True-White, #fff));
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;

  padding-top: 5px;
`;
