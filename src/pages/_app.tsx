import "@/styles/globals.css";
import Theme from "@/styles/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { MuseoModerno } from "next/font/google";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";

const museoModerno = MuseoModerno({
  subsets: ["latin"], // 또는 preload: false
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const queryClient = new QueryClient();

const GlobalStyle = createGlobalStyle`
  .react-chatbot-kit-chat-container {
    width: 100%;
  }
  .react-chatbot-kit-chat-inner-container {
    background-color: black; 
    height: 500px;
  }
  .react-chatbot-kit-chat-message-container{
    height: 500px;
  }
  .react-chatbot-kit-chat-header {
    display: none;
  }
  .react-chatbot-kit-chat-bot-message {
    margin: 0px;
  }
  .react-chatbot-kit-chat-bot-avatar-letter{
    display: none;
  }
  .react-chatbot-kit-chat-bot-avatar-container{
    background: url("assets/svg/Vector.svg") center center no-repeat;
    border: 1px solid white;
  }
  .react-chatbot-kit-user-chat-message{
    background-color: #EBFF00;
    color: var(--True-BlueBlack, #0F1015);
    font-family: "Noto Sans KR";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 166.667% */
    letter-spacing: 0.24px;
  }
  .react-chatbot-kit-chat-bot-message{
    color: var(--True-White, var(--True-White, #FFF));
    font-family: "Noto Sans KR";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 166.667% */
    letter-spacing: 0.24px;
  }
  .react-chatbot-kit-user-chat-message-arrow{
    border-left: 8px solid #EBFF00;
  }
  .react-chatbot-kit-user-avatar-container {
    display: none;
  }
  .react-chatbot-kit-chat-input{
    color: var(--True-White, var(--True-White, #FFF));
  }
  .react-chatbot-kit-chat-input::placeholder {
    color: #FFFFFF80;
  }
  .react-chatbot-kit-chat-input-form{
    border-radius: 100px;
    border: 0.5px solid var(--True-White, #FFF);
    margin: 0 20px;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
  .react-chatbot-kit-chat-input{
    border: none;
  }
  .react-chatbot-kit-chat-btn-send{
    width: 24px;
    height: 24px;
    background: url("assets/svg/Double arrow.svg") center center no-repeat;
    border-radius: 100px;
    background-color: #EBFF00 !important;
    margin-right: 8px;
  }
  .react-chatbot-kit-chat-btn-send-icon{
    display: none;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Theme>
        <GlobalStyle />
        <main className={museoModerno.className}>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, maximum-scale=1"
            />
          </Head>
          <Component {...pageProps} />
        </main>
      </Theme>
    </QueryClientProvider>
  );
}
