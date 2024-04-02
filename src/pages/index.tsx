import { styled } from "styled-components";
import Logo from "@assets/svg/TRUTHTAG.svg";
import LogoImg from "@assets/svg/Vector.svg";
import SearchBtn from "@assets/svg/Search.svg";
import NotiBtn from "@assets/svg/Notifications none.svg";
import { theme } from "@/styles/theme";

export default function Home() {
  const foodCategoryList = ["전체", "컵라면", "우유", "과자", "음료", "아무거나"];
  return (
    <>
      <Header>
        <div>
          <LogoImg style={{ marginRight: "12px" }} />
          <Logo />
        </div>
        <div>
          <SearchBtn style={{ marginRight: "16px" }} />
          <NotiBtn />
        </div>
      </Header>
      <Slider>
        {foodCategoryList.map((item, key) => (
          <FoodCategoryBtn key={key}>{item}</FoodCategoryBtn>
        ))}
      </Slider>
    </>
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
