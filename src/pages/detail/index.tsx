import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import BackArrow from "@assets/svg/Arrow back ios new (1).svg";
import RawMaterialListBtn from "@assets/svg/Arrow back ios new (2).svg";
import BackArrowBlack from "@assets/svg/Arrow back ios new.svg";
import MenuBlack from "@assets/svg/Menu.svg";
import MenuWhite from "@assets/svg/Menu (1).svg";
import SampleImg from "@assets/Product Image.png";
import ChatBotBtn from "@assets/svg/ChatBot Button.svg";
import LikeBtn from "@assets/svg/Favorite Button.svg";
import DateBtn from "@assets/svg/Keyboard arrow down.svg";
import Line from "@assets/svg/Line 25.svg";
import MaterialAddIcon from "@assets/svg/Add circle.svg";
import MaterialDeleteIcon from "@assets/svg/MaterialDelete Icon.svg";
import MaterialRemoveIcon from "@assets/svg/Remove circle.svg";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProfileImage from "@assets/svg/profile_image_review.svg";
import LikeIcon from "@assets/svg/thumb_up.svg";
import ProductImage from "@assets/svg/rectangle_product_image.svg";

const ResponsiveLine = dynamic(
  () => import("@nivo/line").then((m) => m.ResponsiveLine),
  { ssr: false }
);
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Footer from "@components/common/Footer";

const capacityData = [
  {
    id: "용량",
    data: [
      {
        x: "2024/02/19", //string
        y: 41,
      },
      {
        x: "2024/03/04",
        y: 39,
      },
      {
        x: "2024/03/18",
        y: 39,
      },
      {
        x: "2024/04/01",
        y: 37,
      },
      {
        x: "2024/04/15",
        y: 37,
      },
    ],
  },
];

const priceData = [
  {
    id: "가격",
    data: [
      {
        x: "2024/02/19", //string
        y: 1100,
      },
      {
        x: "2024/03/04",
        y: 1200,
      },
      {
        x: "2024/03/18",
        y: 1400,
      },
      {
        x: "2024/04/01",
        y: 1500,
      },
      {
        x: "2024/04/15",
        y: 1800,
      },
    ],
  },
];

const MyResponsiveLine = ({ data /* see data tab */ }: any) => (
  <ResponsiveLine
    colors={{ scheme: "greens" }}
    theme={{
      axis: {
        domain: {
          line: {
            stroke: "#777777",
            strokeWidth: 1,
          },
        },
        legend: {
          text: {
            fontSize: 12,
            fill: "#333333",
            outlineWidth: 0,
            outlineColor: "transparent",
          },
        },
        ticks: {
          line: {
            stroke: "#777777",
            strokeWidth: 1,
          },
          text: {
            //x, y 축 텍스트
            fontSize: 10,
            fill: "#ffffff",
            outlineWidth: 0,
            outlineColor: "transparent",
          },
        },
      },
      legends: {
        text: {
          fill: "white", // 가격 / 용량 범주
        },
      },
    }}
    data={data}
    margin={{ top: 10, right: 100, bottom: 50, left: 30 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    pointSize={5}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    enableTouchCrosshair={true}
    useMesh={true}
    enableGridX={false}
    enableGridY={false}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

function Index() {
  useEffect(() => {
    // 10초 후에 토스트를 띄우는 타이머 설정
    const timer = setTimeout(() => {
      toast.success("컵누들 매콤한 맛에서 스킴플레이션이 발생하였습니다!", {
        position: "bottom-center",
      });
    }, 20000); // 10000ms = 10 seconds

    // 컴포넌트가 언마운트될 때 타이머를 클리어
    return () => clearTimeout(timer);
  }, []);

  const router = useRouter();
  const [onClickListBtn, setOnClickListBtn] = useState(false);
  const dateData = [
    { value: "2024/04/08", label: "2024/04/08" },
    { value: "2024/03/12", label: "2024/03/12" },
    { value: "2024/02/11", label: "2024/02/11" },
  ];

  const [headerColorChange, setHeaderColorChange] = useState(false);

  const changeHeaderColor = () => {
    if (window.scrollY >= 390) {
      setHeaderColorChange(true);
    } else {
      setHeaderColorChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHeaderColor);
    return () => {
      window.removeEventListener("scroll", changeHeaderColor);
    };
  }, []);

  return (
    <div
      style={{ backgroundColor: "white", height: "100vh", overflowY: "scroll" }}
    >
      <DetailHeader headerColorChange={headerColorChange}>
        {headerColorChange ? (
          <>
            <BackArrow onClick={() => router.back()} />
            <MenuWhite />
          </>
        ) : (
          <>
            <BackArrowBlack onClick={() => router.back()} />
            <MenuBlack />
          </>
        )}
      </DetailHeader>

      <ImageContainer />

      <InfoSection>
        <InfoTitle>
          컵누들 매콤한 맛 소컵
          <div>
            <ChatBotBtn style={{ marginRight: "16px" }} />
            <LikeBtn />
          </div>
        </InfoTitle>
        <InfoTagSection>
          <span style={{ marginRight: "8px" }}>오뚜기</span>{" "}
          <InfoTag>컵라면</InfoTag>
        </InfoTagSection>

        <PriceAmountTitleContainer>
          <PriceAmountTitle>가격</PriceAmountTitle>
        </PriceAmountTitleContainer>
        <ChartContainer>
          <MyResponsiveLine data={priceData} />
        </ChartContainer>
        {/*
        <ChartContainer>
          <MyResponsiveLine data={capacityData} />
        </ChartContainer>
      */}
        <RawMaterialTitle>
          원재료
          <RawMaterialDateButton>
            <Select
              className="basic-single"
              classNamePrefix="select"
              defaultValue={dateData[0]}
              isDisabled={false}
              isLoading={false}
              isClearable={false}
              isRtl={false}
              isSearchable={false}
              name="color"
              options={dateData}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: "darkgray",
                  primary: "white",
                  neutral0: "black",
                  neutral20: "white",
                  neutral30: "white",
                  neutral40: "white",
                  neutral50: "white",
                  neutral60: "white",
                  neutral70: "white",
                  neutral80: "white",
                  neutral90: "white",
                },
              })}
            />
          </RawMaterialDateButton>
        </RawMaterialTitle>
        <RawMaterialList onClickListBtn={onClickListBtn}>
          {["순한간장분말", "피쉬콜라겐", "건미역"].map((item, key) => (
            <RawMaterialItem key={key}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "327px",
                }}
              >
                <div style={{ color: "#50E82A" }}>{item}</div>
                <MaterialAddIcon />
              </div>
              <Line />
            </RawMaterialItem>
          ))}
          {["건파", "건조꽃맛살어묵"].map((item, key) => (
            <RawMaterialItem key={key}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "327px",
                }}
              >
                <div style={{ color: "#E82A58" }}>{item}</div>
                <MaterialDeleteIcon />
              </div>
              <Line />
            </RawMaterialItem>
          ))}
          {["당면", "설탕", "간장분말", "진한감칠맛분", "쇠고기육수분말"].map(
            (item, key) => (
              <RawMaterialItem key={key}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "327px",
                  }}
                >
                  <div>{item}</div>
                </div>
                <Line />
              </RawMaterialItem>
            )
          )}
        </RawMaterialList>
        <ListBtnContainer onClickListBtn={onClickListBtn}>
          <RawMaterialListBtn
            onClick={() => setOnClickListBtn(!onClickListBtn)}
          />
        </ListBtnContainer>
        <SReviewHeader>리뷰</SReviewHeader>
        <SReviewContainer>
        <ReviewContainer>
          <ReviewHeader>
            <ReviewHeaderText>
              <ProfileImage />
              <div style={{ marginLeft: "12px" }}>코딩 마법사 2024.02.02</div>
            </ReviewHeaderText>
            <ReviewLikeButton>
              <LikeIcon style={{ marginRight: "6px" }} />
              17
            </ReviewLikeButton>
          </ReviewHeader>
          <ReviewContent>
            <ReviewText>
              몇 년동안 스킴, 슈링크 플레이션이 없어서 너무 좋아요~ 역시 착한
              기업 갓뚜기 제품!! 앞으로도 재구매 의사 100%입니다!
            </ReviewText>
            <ProductImage />
          </ReviewContent>

        </ReviewContainer>
      </SReviewContainer>

      </InfoSection>

      <ToastContainer onClick={() => router.push("/mypage/notification")} />
      <Footer clicked="home" padding />
    </div>
  );
}

export default Index;

const DetailHeader = styled.div<{ headerColorChange: boolean }>`
  width: 375px;
  height: 56px;
  flex-shrink: 0;
  background-color: ${(props) => (props.headerColorChange ? "black" : "white")};

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;

  padding: 0 24px;

  z-index: 1;
`;

const ImageContainer = styled.div`
  height: 390px;
  background: url("assets/Product Image.png") center center;
`;

const InfoSection = styled.div`
  border-radius: 15px 15px 0px 0px;
  background: white;
  width: 375px;
  height: 1196px;
  flex-shrink: 0;
  background-color: black;
  padding: 24px;
`;

const InfoTitle = styled.div`
  color: var(--True-White, #fff);
  font-family: "Noto Sans KR";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 150% */

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: "4px";
`;

const InfoTagSection = styled.div`
  color: var(--True-White, #fff);
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */

  display: flex;
  align-items: center;

  margin-bottom: 24px;
`;

const InfoTag = styled.div`
  color: black;
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 900;
  line-height: 20px; /* 166.667% */
  background-color: var(--True-Yellow, #ebff00);
  min-width: 50px;
  max-width: fit-content;
  display: flex;
  justify-content: center;
  border-radius: 100px;
`;

const PriceAmountTitleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  color: var(--True-White, #fff);
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 140% */
`;

const PriceAmountTitle = styled.div`
  margin-bottom: 12px;
`;

const ChartContainer = styled.div`
  width: 375px;
  height: 145px;
  margin-bottom: 24px;
`;

const RawMaterialTitle = styled.div`
  color: var(--True-White, #fff);
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 140% */

  display: flex;
  justify-content: space-between;

  margin-bottom: 12px;
`;

const RawMaterialDateButton = styled.div`
  color: var(--True-White, #fff);
  text-align: right;
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */

  display: flex;
  align-items: center;
`;

const RawMaterialList = styled.div<{ onClickListBtn: boolean }>`
  border-radius: 10px 10px 0px 0px;
  background: var(--True-Light-BlueBlack, #191a1f);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);

  width: 327px;
  height: ${(props) => (props.onClickListBtn ? "fit-content" : "217px")};

  padding: 8px 16px 20px 16px;

  overflow-y: hidden;
`;

const RawMaterialItem = styled.div`
  height: 55px;
  width: 295px;
  display: flex;
  align-items: center;

  display: flex;
  flex-wrap: wrap;
  align-items: center;

  color: white;
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 166.667% */
`;

const ListBtnContainer = styled.div<{ onClickListBtn: boolean }>`
  border-radius: ${(props) =>
    props.onClickListBtn ? "10px 10px 0px 0px" : "0px 0px 10px 10px"};
  background: var(--True-Light-BlueBlack, #191a1f);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);
  width: 327px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: ${(props) => (props.onClickListBtn ? "0px" : "20px")};
  padding-top: ${(props) => (!props.onClickListBtn ? "0px" : "20px")};

  transform: ${(props) => (props.onClickListBtn ? "rotate(180deg)" : "")};
`;

const SReviewHeader = styled.div`
  color: var(--True-White, #fff);
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 140% */

  margin-top: 24px;
  margin-bottom: 12px;
`;


const SReviewContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 16px;
`;

const ReviewContainer = styled.div`
  width: 327px;
  height: 148px;
  border-radius: 10px;
  background: var(--True-Light-BlueBlack, #191a1f);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);
  padding: 16px;
`;

const ReviewHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: #7d7f82;

  font-family: "Noto Sans KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-bottom: 12px;
`;

const ReviewHeaderText = styled.div`
  display: flex;
  align-items: center;
`;

const ReviewLikeButton = styled.button`
  width: 54px;
  height: 24px;
  border-radius: 100px;
  background: #878787;
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--True-White, var(--True-White, #fff));
  text-align: right;
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 12px; /* 100% */
`;

const ReviewContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const ReviewText = styled.div`
  width: 207px;
  height: 72px;

  color: var(--True-White, var(--True-White, #fff));
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.24px;
`;

const ReviewLandingButton = styled.div`
  width: 295px;
  height: 40px;
  border-radius: 100px;
  border: 0.5px solid var(--True-White, #fff);

  padding: 8px;

  color: var(--True-White, var(--True-White, #fff));
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
