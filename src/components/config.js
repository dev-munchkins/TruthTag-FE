import { createChatBotMessage } from "react-chatbot-kit";
import FoundItem from "../pages/chat/FoundItem";

const config = {
  initialMessages: [
    createChatBotMessage(
      `안녕하세요! Truth Tag의 Chat Bot입니다. 무엇을 도와드릴까요?`,
      {}
    ),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#191A1F",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  state: {
    yesButtonClicked: false,
    noButtonClicked: false,
  },
  widgets: [
    {
      props: {},
      widgetName: "FoundItem",
      widgetFunc: (props) => <FoundItem {...props} />,
      mapStateToProps: ["yesButtonClicked", "noButtonClicked"],
    },
  ],
};

export default config;
