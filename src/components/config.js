import { createChatBotMessage } from "react-chatbot-kit";
import FoundItem from "../pages/chat/FoundItem";
import ChatbotOptions from "@pages/chat/\bChatbotOptions";
import FoundItems from "@pages/chat/\bFoundItems";
import SimilarResource from "@pages/chat/SimilarResource";
import SimilarResourceResult from "@pages/chat/\bSimilarResourceResult";
import CompareProducts from "@pages/chat/CompareProducts";

const config = {
  initialMessages: [
    createChatBotMessage(
      `안녕하세요! Truth Tag의 Chat Bot입니다. 무엇을 도와드릴까요?
      제공하는 기능은 다음과 같습니다 :)
      `,
      {
        widget: "ChatbotOptions",
      }
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
    thanksButtonClicked: false,
    showMoreButtonClicked: false,
    yesResourceButtonClicked: false,
    noResourceButtonClicked: false,
  },
  widgets: [
    {
      props: {},
      widgetName: "FoundItem",
      widgetFunc: (props) => <FoundItem {...props} />,
      mapStateToProps: ["yesButtonClicked", "noButtonClicked"],
    },
    {
      props: {},
      widgetName: "ChatbotOptions",
      widgetFunc: (props) => <ChatbotOptions {...props} />,
      mapStateToProps: [],
    },
    {
      props: {},
      widgetName: "FoundItems",
      widgetFunc: (props) => <FoundItems {...props} />,
      mapStateToProps: ["thanksButtonClicked", "showMoreButtonClicked"],
    },
    {
      props: {},
      widgetName: "SimilarResource",
      widgetFunc: (props) => <SimilarResource {...props} />,
      mapStateToProps: ["yesResourceButtonClicked", "noResourceButtonClicked"],
    },
    {
      props: {},
      widgetName: "SimilarResourceResult",
      widgetFunc: (props) => <SimilarResourceResult {...props} />,
      mapStateToProps: ["thanksButtonClicked", "showMoreButtonClicked"],
    },
    {
      props: {},
      widgetName: "CompareProducts",
      widgetFunc: (props) => <CompareProducts {...props} />,
      mapStateToProps: ["yesButtonClicked", "noButtonClicked"],
    },
  ],
};

export default config;
