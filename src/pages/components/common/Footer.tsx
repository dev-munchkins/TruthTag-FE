import React from "react";
import styled from "styled-components";
import HomeIcon from "@assets/svg/Home.svg";
import ChatIcon from "@assets/svg/Chat.svg";
import CameraIcon from "@assets/svg/Camera.svg";
import MypageIcon from "@assets/svg/Person.svg";
import { useRouter } from "next/router";

interface FooterType {
  clicked: string;
}

const Footer = ({ clicked }: FooterType) => {
  const router = useRouter();
  return (
    <SFooter>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => router.push("/")}
      >
        <path
          d="M6 21C5.45 21 4.97933 20.8043 4.588 20.413C4.196 20.021 4 19.55 4 19V10C4 9.68333 4.071 9.38333 4.213 9.1C4.35433 8.81667 4.55 8.58333 4.8 8.4L10.8 3.9C10.9833 3.76667 11.175 3.66667 11.375 3.6C11.575 3.53333 11.7833 3.5 12 3.5C12.2167 3.5 12.425 3.53333 12.625 3.6C12.825 3.66667 13.0167 3.76667 13.2 3.9L19.2 8.4C19.45 8.58333 19.646 8.81667 19.788 9.1C19.9293 9.38333 20 9.68333 20 10V19C20 19.55 19.8043 20.021 19.413 20.413C19.021 20.8043 18.55 21 18 21H14V14H10V21H6Z"
          fill={clicked === "home" ? "white" : "#3A3F4C"}
        />
      </svg>

      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => router.push("/chat")}
      >
        <g id="Chat" clip-path="url(#clip0_595_1891)">
          <path
            id="Vector"
            d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM6 9H18V11H6V9ZM14 14H6V12H14V14ZM18 8H6V6H18V8Z"
            fill="#3A3F4C"
          />
        </g>
        <defs>
          <clipPath id="clip0_595_1891">
            <rect
              width="24"
              height="24"
              fill={clicked === "chat" ? "white" : "#3A3F4C"}
            />
          </clipPath>
        </defs>
      </svg>

      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => router.push("/camera")}
      >
        <g id="Camera" clip-path="url(#clip0_595_1894)">
          <path
            id="Vector"
            d="M9.4 10.5L14.17 2.24C13.47 2.09 12.75 2 12 2C9.6 2 7.4 2.85 5.68 4.25L9.34 10.6L9.4 10.5ZM21.54 9C20.62 6.08 18.39 3.74 15.54 2.66L11.88 9H21.54ZM21.8 10H14.31L14.6 10.5L19.36 18.75C21 16.97 22 14.61 22 12C22 11.31 21.93 10.65 21.8 10ZM8.54 12L4.64 5.25C3.01 7.03 2 9.39 2 12C2 12.69 2.07 13.35 2.2 14H9.69L8.54 12ZM2.46 15C3.38 17.92 5.61 20.26 8.46 21.34L12.12 15H2.46ZM13.73 15L9.83 21.76C10.53 21.91 11.25 22 12 22C14.4 22 16.6 21.15 18.32 19.75L14.66 13.4L13.73 15Z"
            fill="#3A3F4C"
          />
        </g>
        <defs>
          <clipPath id="clip0_595_1894">
            <rect
              width="24"
              height="24"
              fill={clicked === "camera" ? "white" : "#3A3F4C"}
            />
          </clipPath>
        </defs>
      </svg>

      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => router.push("/mypage")}
      >
        <g id="Person" clip-path="url(#clip0_595_1897)">
          <path
            id="Vector"
            d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V19C4 19.55 4.45 20 5 20H19C19.55 20 20 19.55 20 19V18C20 15.34 14.67 14 12 14Z"
            fill="#3A3F4C"
          />
        </g>
        <defs>
          <clipPath id="clip0_595_1897">
            <rect
              width="24"
              height="24"
              fill={clicked === "mypage" ? "white" : "#3A3F4C"}
            />
          </clipPath>
        </defs>
      </svg>
    </SFooter>
  );
};

export default Footer;

const SFooter = styled.div`
  width: 375px;
  height: 56px;
  flex-shrink: 0;

  border-radius: 15px 15px 0px 0px;
  background: rgba(16, 17, 22, 0.5);

  backdrop-filter: blur(7.5px);

  padding: 0px 35px;

  display: flex;
  position: absolute;
  bottom: 0;

  z-index: 1;

  gap: 70px;
`;
