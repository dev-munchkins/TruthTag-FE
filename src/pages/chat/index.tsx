import React, { useEffect, useReducer } from "react";
import styled from "styled-components";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./config.js";
import MessageParser from "./MessageParser.jsx";
import ActionProvider from "./ActionProvider.jsx";
import HomeIcon from "@assets/svg/Home.svg";
import ChatIcon from "@assets/svg/Chat.svg";
import CameraIcon from "@assets/svg/Camera.svg";
import MypageIcon from "@assets/svg/Person.svg";
import { useRouter } from "next/router.js";

const Index = () => {
  useEffect(() => {
    const inputElement = document.querySelector(
      ".react-chatbot-kit-chat-input"
    ) as HTMLInputElement;
    if (inputElement) {
      inputElement.placeholder = "어떤 상품의 대체품을 찾으시나요?";
    }
  }, []);
  const router = useRouter();
  return (
    <div>
      <Title>Chat Bot</Title>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
      <ChatBotFooter>
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
            fill={"#3A3F4C"}
          />
        </svg>

        {/* chat 버튼 */}
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
              fill="#FFF"
            />
          </g>
          <defs>
            <clipPath id="clip0_595_1891">
              <rect width="24" height="24" fill={"#FFF"} />
            </clipPath>
          </defs>
        </svg>

        <CameraIcon onClick={() => router.push("/camera")} />
        <MypageIcon onClick={() => router.push("/mypage")} />
      </ChatBotFooter>
    </div>
  );
};

export default Index;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  height: 56px;
`;

const ChatBotFooter = styled.div`
  width: 375px;
  height: 56px;
  padding: 16px 35px;
  gap: 70px;
  border-radius: 15px 15px 0px 0px;
  background: rgba(16, 17, 22, 0.5);
  backdrop-filter: blur(7.5px);
  display: flex;
`;
