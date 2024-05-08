import React from "react";
import { createClientMessage } from "react-chatbot-kit";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage(
      "찾으시는 제품이 아래의 내용과 맞는지 확인해주세요!"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleFoundItem = () => {
    const botMessage = createChatBotMessage(
      "찾으시는 제품이 아래의 내용과 맞는지 확인해주세요!",
      {
        widget: "FoundItem",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleYesButton = () => {
    const clientMessage = createClientMessage("네, 딱 맞아요!");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, clientMessage],
    }));
  };

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleFoundItem,
            handleYesButton,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
