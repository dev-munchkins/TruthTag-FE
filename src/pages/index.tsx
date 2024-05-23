import { styled } from "styled-components";
import Logo from "@assets/svg/TRUTHTAG.svg";
import LogoImg from "@assets/svg/Vector.svg";
import SearchBtn from "@assets/svg/Search.svg";
import NotiBtn from "@assets/svg/Notifications none.svg";
import { theme } from "@/styles/theme";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { useRouter } from "next/router";
import Footer from "../components/common/Footer";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import SampleImage from "@assets/svg/camera-sample-food.svg";
import ProfileImage from "@assets/svg/profile_image_review.svg";
import LikeIcon from "@assets/svg/thumb_up.svg";
import ProductImage from "@assets/svg/rectangle_product_image.svg";
import LandingButtonImage from "@assets/svg/circle_product_image.svg";
import ReviewArrow from "@assets/svg/arrow-forward-ios.svg";

export default function Home() {
  const foodCategoryList = [
    "전체",
    "컵라면",
    "우유",
    "과자",
    "음료",
    "아무거나",
  ];

  const router = useRouter();

  const queryClient = useQueryClient();

  const getTodos = () =>
    axios
      .get(`api/v1/products/trend?category={category_id}`)
      .then((response) => response.data);

  const query = useQuery({ queryKey: ["todos"], queryFn: getTodos });

  console.log(query);

  return (
    <div style={{ height: "100vh", overflowY: "scroll" }}>
      <Header>
        <div>
          <LogoImg style={{ marginRight: "12px" }} />
          <Logo />
        </div>
        <div>
          <SearchBtn
            style={{ marginRight: "16px" }}
            onClick={() => router.push("/search")}
          />
          <NotiBtn onClick={() => router.push("/mypage/notification")} />
        </div>
      </Header>

      <Slider>
        {foodCategoryList.map((item, key) => (
          <FoodCategoryBtn key={key}>{item}</FoodCategoryBtn>
        ))}
      </Slider>
      <Flicking align="center" circular={false} easing={(x) => x}>
        <CarouselItem className="panel" style={{ color: "white" }}>
          <CarouselItemTitle>
            최근에 <span>SKIM</span>된,
          </CarouselItemTitle>
          <CarouselItemInfo>
            <div>오뚜기</div>
            <div>컵누들 매콤한 맛</div>
          </CarouselItemInfo>
        </CarouselItem>
        <CarouselItem className="panel" style={{ color: "white" }}>
          <CarouselItemTitle>
            최근에 <span>SHRINK</span>된,
          </CarouselItemTitle>
          <CarouselItemInfo>
            <div>오뚜기</div>
            <div>컵누들 매콤한 맛</div>
          </CarouselItemInfo>
        </CarouselItem>
        <CarouselItem className="panel" style={{ color: "white" }}>
          <CarouselItemTitle>
            <span>즐겨찾기</span>하기 좋은!
          </CarouselItemTitle>
          <CarouselItemInfo>
            <div>오뚜기</div>
            <div>컵누들 매콤한 맛</div>
          </CarouselItemInfo>
        </CarouselItem>
      </Flicking>
      <ReviewSection>
        Trend <span>REVIEW</span>
      </ReviewSection>

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
          <ReviewLandingButton>
            <div style={{ display: "flex", alignItems: "center" }}>
              <LandingButtonImage style={{ marginRight: "8px" }} />
              오뚜기 컵누들 매콤한 맛
            </div>
            <ReviewArrow />
          </ReviewLandingButton>
        </ReviewContainer>
      </SReviewContainer>

      <Footer clicked="home" padding />
    </div>
  );
}

const Header = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`;

const Slider = styled.div`
  overflow-x: scroll;
  gap: 8px;
  display: flex;
  margin-left: 24px;
  margin-bottom: 30px;
`;

const FoodCategoryBtn = styled.div`
  border-radius: 100px;
  border: 1px solid white;
  color: ${theme.colors.TrueYellow};
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 12px; /* 100% */

  min-width: 67px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CarouselItem = styled.div`
  width: 327px;
  height: 422px;
  border-radius: 15px;
  background: url(assets/svg/camera-sample-food.svg) lightgray 50% / cover
    no-repeat;
  box-shadow: 0px -150px 100px 10px rgba(0, 0, 0, 0.5) inset;
  margin-right: 12px;
  padding: 0 32px;
`;

const CarouselItemTitle = styled.div`
  color: var(--True-White, #fff);
  font-family: "Noto Sans KR";
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 128.571% */
  letter-spacing: -0.5px;
  & > span {
    color: var(--True-Yellow, var(--True-White, #ebff00));
  }
  margin-top: 286px;
  margin-bottom: 16px;
`;

const CarouselItemInfo = styled.div`
  color: var(--True-White, var(--True-White, #fff));
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px; /* 162.5% */
  letter-spacing: -0.5px;
`;

const ReviewSection = styled.div`
  color: var(--True-White, var(--True-White, #fff));
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 140% */
  & > span {
    color: var(--True-Yellow, var(--True-White, #ebff00));
  }
  margin-top: 24px;
  padding: 0 24px;
`;

const SReviewContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 16px;
`;

const ReviewContainer = styled.div`
  width: 327px;
  height: 200px;
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
