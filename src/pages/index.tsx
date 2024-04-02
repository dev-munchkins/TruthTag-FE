import { styled } from "styled-components";
import Logo from "@assets/svg/TRUTHTAG.svg";
import LogoImg from "@assets/svg/Vector.svg";

export default function Home() {
  return (
    <>
      <Header>
        <LogoImg />
        <Logo />
      </Header>
    </>
  );
}

const Header = styled.div`
  height: 56px;
`;
