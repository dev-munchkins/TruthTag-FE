import React, { useState } from "react";
import LogoImg from "@assets/svg/Vector.svg";
import styled from "styled-components";
import Select, { StylesConfig } from "react-select";
import SearchIcon from "@assets/svg/Search.svg";
import Line from "@assets/svg/Line 25.svg";
import { useRouter } from "next/router";

function Index() {
  const router = useRouter();
  const options = [
    { value: "상품명", label: "상품명" },
    { value: "원재료", label: "원재료" },
  ];

  const [selectedOption, setSelectedOption] = useState(options[1]);

  const howtWordsItemList = [0, 0, 0, 0, 0, 0, 0, 0];

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
          <SearchField placeholder="찾으시는 상품이 무엇인가요?"></SearchField>
          <SearchIcon />
        </SearchBar>
      </SearchHeader>

      {selectedOption.value === "상품명" ? (
        <HotSearchWordsSection>
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
          ))}
        </HotSearchWordsSection>
      ) : (
        <RawMaterialSection>
          <RawMaterialTitle>포함할 원재료</RawMaterialTitle>
          <SRawMaterialInput placeholder="검색에 포함할 원재료를 입력해주세요!"></SRawMaterialInput>
          <RawMaterialTitle>제외할 원재료</RawMaterialTitle>
          <SRawMaterialInput placeholder="검색에 제외할 원재료를 입력해주세요!"></SRawMaterialInput>
        </RawMaterialSection>
      )}
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
