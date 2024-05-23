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
    const clientMessage = createClientMessage("응, 딱 맞아!");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, clientMessage],
    }));
  };

  const handleShrinkflation = () => {
    const botMessage = createChatBotMessage(
      "최근에 슈링크플레이션이 발생한 상품은 다음과 같습니다.",
      {
        widget: "FoundItems",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleThanksButton = () => {
    const clientMessage = createClientMessage("고마워, 충분해!");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, clientMessage],
    }));
  };

  const handleShowMoreButton = () => {
    const clientMessage = createClientMessage("다른 상품도 보여줘.");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, clientMessage],
    }));
  };

  const handleResourceSimilar = () => {
    const botMessage = createChatBotMessage(
      "원재료 유사품을 찾고자 하는 상품이 아래의 내용과 일치하는지 확인해주세요!",
      {
        widget: "SimilarResource",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleResourceYesButton = () => {
    const clientMessage = createClientMessage("응, 딱 맞아!");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, clientMessage],
    }));

    const botMessage = createChatBotMessage(
      "말씀하신 상품과 원재료가 유사한 상품은 다음과 같습니다.",
      {
        widget: "SimilarResourceResult",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleCompare = () => {
    const botMessage = createChatBotMessage(
      "비교하고자 하는 2개의 상품이 아래의 내용과 일치하는지 확인해주세요!",
      {
        widget: "CompareProducts",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleCompareYesButton = () => {
    const clientMessage = createClientMessage("응, 딱 맞아!");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, clientMessage],
    }));

    const botMessage = createChatBotMessage(
      "가격: 컵누들 매콤한 맛이 200원 더 저렴합니다. 용량: 누들핏 육개장 맛이 10ml 더 많습니다. 원재료: 컵누들 매콤한 맛은 감자 전분이 포함되어 있으며, 누들핏 육개장 맛은 고구마 전분이 포함되어 있습니다.",
      {}
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
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
            handleShrinkflation,
            handleThanksButton,
            handleShowMoreButton,
            handleResourceSimilar,
            handleResourceYesButton,
            handleCompare,
            handleCompareYesButton,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
