import React, { useEffect, useState } from "react";
import LogoImg from "@assets/svg/Vector.svg";
import styled from "styled-components";
import Select, { StylesConfig } from "react-select";
import SearchIcon from "@assets/svg/Search.svg";
import Line from "@assets/svg/Line 25.svg";
import { useRouter } from "next/router";
import Footer from "@components/common/Footer";
import ResultProductImage from "@assets/svg/rectangle_product_image.svg";
import ProductHeart from "@assets/svg/favorite_gray.svg";

function Index() {
  const router = useRouter();
  const options = [
    { value: "상품명", label: "상품명" },
    { value: "원재료", label: "원재료" },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [productId, setProductId] = useState("");

  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event: any) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    setSearchValue("");
  }, [selectedOption]);

  const howtWordsItemList = [
    "컵누들 매콤한 맛 소컵",
    "자유시간",
    "비비고 육개장",
    "고향만두",
    "동원 참치 마일드",
    "더 건강한 햄",
    "서울우유 고단백 치즈",
    "아몬드 브리즈 초콜릿",
  ];

  useEffect(() => {
    if (productId !== "") {
      router.push(`/search?id=${productId}`);
    }
  }, [productId]);

  useEffect(() => {
    setProductId("");
    router.push(`/search`);
  }, [selectedOption]);

  return (
    <div style={{ padding: "0 24px", height: "100vh", overflowY: "scroll" }}>
      <SearchHeader>
        <LogoImg onClick={() => router.push("/")} />
        <SearchBar>
          <Select
            defaultValue={selectedOption}
            onChange={(e) => e && setSelectedOption(e)}
            options={options}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderRadius: "100px",
                backgroundColor: "#EBFF00",
                height: "24px",
                minHeight: "24px",
                padding: "0px",
                margin: "0px",
                alignItems: "center",
                border: "0px",
              }),
              indicatorsContainer: (baseStyles, state) => ({
                ...baseStyles,
                padding: "0px",
                height: "24px",
                margin: "0px",
                "& > div": {
                  padding: "0px",
                  paddingRight: "5px",
                },
                "& > span": {
                  display: "none",
                },
              }),
              input: (baseStyles, state) => ({
                ...baseStyles,
                padding: "0px",
                margin: "0px",
              }),
              valueContainer: (baseStyles, state) => ({
                ...baseStyles,
                width: "60px",
                padding: "0px",

                fontFamily: "Noto Sans KR",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "900",
                lineHeight: "normal",

                margin: "0px",
                paddingLeft: "10px",
              }),
              option: (baseStyle, state) => ({
                ...baseStyle,
                color: "black",

                fontFamily: "Noto Sans KR",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "900",
                lineHeight: "normal",

                backgroundColor: state.isSelected ? "lightgray" : "white",
              }),
            }}
          />
          <SearchField
            placeholder="찾으시는 상품이 무엇인가요?"
            value={searchValue}
            onChange={handleChange}
          ></SearchField>
          <SearchIcon
            onClick={() => {
              setProductId("1");
            }}
          />
        </SearchBar>
      </SearchHeader>

      {selectedOption.value === "상품명" ? (
        <HotSearchWordsSection>
          {productId === "" ? (
            <>
              <HotSearchWordsTitle>인기 검색어</HotSearchWordsTitle>
              {howtWordsItemList.map((item, index) => (
                <div key={index}>
                  <HotSearchWordsItem key={index}>
                    <span style={{ marginRight: "21px", color: "#EBFF00" }}>
                      {index + 1}
                    </span>
                    {item}
                    {howtWordsItemList.length - 1 === index ? <></> : <Line />}
                  </HotSearchWordsItem>
                </div>
              ))}{" "}
            </>
          ) : (
            <>
              <ResultHeader>
                <SResultTitle>결과</SResultTitle>
                <SResultLength>1</SResultLength>
                <SResultContainer onClick={() => router.push("/detail")}>
                  <ResultProductImage />
                  <SContent>
                    <SProductName>컵누들 매콤한 맛</SProductName>
                    <SProductFirm>오뚜기</SProductFirm>
                    <SReview>리뷰 (10)</SReview>
                  </SContent>
                  <SHeartButtonContainer>
                    <ProductHeart />
                  </SHeartButtonContainer>
                </SResultContainer>
              </ResultHeader>
            </>
          )}
        </HotSearchWordsSection>
      ) : (
        <>
          {productId === "" ? (
            <RawMaterialSection>
              <RawMaterialTitle>포함할 원재료</RawMaterialTitle>
              <SRawMaterialInput placeholder="검색에 포함할 원재료를 입력해주세요!"></SRawMaterialInput>
              <RawMaterialTitle>제외할 원재료</RawMaterialTitle>
              <SRawMaterialInput placeholder="검색에 제외할 원재료를 입력해주세요!"></SRawMaterialInput>
            </RawMaterialSection>
          ) : (
            <>
              <ResultHeader>
                <SResultTitle>결과</SResultTitle>
                <SResultLength>2</SResultLength>
                <SResultContainer onClick={() => router.push("/detail")}>
                  <ResultProductImage />
                  <SContent>
                    <SProductName>컵누들 매콤한 맛</SProductName>
                    <SProductFirm>오뚜기</SProductFirm>
                    <SReview>리뷰 (10)</SReview>
                  </SContent>
                  <SHeartButtonContainer>
                    <ProductHeart />
                  </SHeartButtonContainer>
                </SResultContainer>
              </ResultHeader>
              <SResultContainer onClick={() => router.push("/detail")}>
                <ItemImage2 />
                <SContent>
                  <SProductName>누들핏 육개장 맛</SProductName>
                  <SProductFirm>농심</SProductFirm>
                  <SReview>리뷰 (5)</SReview>
                </SContent>
                <SHeartButtonContainer>
                  <ProductHeart />
                </SHeartButtonContainer>
              </SResultContainer>
            </>
          )}
        </>
      )}

      <Footer clicked="home" />
    </div>
  );
}

export default Index;

const SearchHeader = styled.div`
  padding: 8 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
`;

const SearchBar = styled.div`
  width: 287px;
  height: 40px;
  padding: 8px 16px 8px 8px;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  border: 0.5px solid var(--True-White, #fff);

  color: var(--TP-White, rgba(255, 255, 255, 0.5));
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  display: inline-flex;
`;

const SearchField = styled.input`
  width: 159px;
  color: var(--True-White, var(--True-White, #fff));
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const HotSearchWordsSection = styled.div``;

const HotSearchWordsTitle = styled.div`
  color: var(--True-White, var(--True-White, #fff));
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 225% */
  width: 375px;
  height: 56px;
  display: flex;
  align-items: center;
`;

const HotSearchWordsItem = styled.div`
  color: var(--True-White, var(--True-White, #fff));
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
  height: 52px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const RawMaterialSection = styled.div`
  margin-bottom: 440px;
`;

const RawMaterialTitle = styled.div`
  width: 375px;
  height: 56px;
  flex-shrink: 0;
  color: var(--True-White, var(--True-White, #fff));
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 225% */
  display: flex;
  align-items: center;
`;

const SRawMaterialInput = styled.input`
  border-radius: 10px;
  border: 0.5px solid var(--True-White, #fff);

  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);

  display: flex;
  width: 327px;
  height: 48px;
  padding: 16px 122px 15px 16px;
  align-items: center;
  flex-shrink: 0;
  color: var(--True-Yellow, #ebff00);
  text-align: justify;
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-style: normal;
  line-height: normal;
  font-weight: 700;

  ::placeholder {
    color: var(--TP-White, rgba(255, 255, 255, 0.5));
    font-weight: 400;
  }
`;

const NotificationImageContainer = styled.div`
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 100px;
  background: rgba(0, 0, 0, 0.3);

  background-image: url("/assets/Product Image.png") center center;
`;

const ResultHeader = styled.div`
  padding: 10px 0px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const SResultTitle = styled.span`
  color: var(--True-White, var(--True-White, #fff));
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 225% */
  margin-right: 7px;
`;

const SResultLength = styled.span`
  color: var(--TP-White, rgba(255, 255, 255, 0.5));
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 300% */
`;

const SResultContainer = styled.div`
  width: 327px;
  height: 104px;
  border-radius: 10px;
  background: var(--True-Light-BlueBlack, #191a1f);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);
  padding: 16px;
  gap: 18px;

  display: flex;
  flex-wrap: wrap;
`;

const SContent = styled.div``;

const SProductName = styled.div`
  color: var(--True-White, var(--True-White, #fff));
  font-family: "Noto Sans KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
`;

const SProductFirm = styled.div`
  color: var(--True-White, var(--True-White, #fff));
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px; /* 175% */
`;

const SReview = styled.div`
  color: var(--TP-White, rgba(255, 255, 255, 0.5));
  font-family: "Noto Sans KR";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.2px;

  margin-top: 10px;
`;

const SHeartButtonContainer = styled.div`
  width: 24px;
  height: 24px;
  background-color: var(--True-Gray, #7d7f82);
  border-radius: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 65px;
`;

const ItemImage2 = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 10px;
  background: url(assets/svg/ResourceReplaceImage.svg) lightgray 50% / cover
    no-repeat;
`;
