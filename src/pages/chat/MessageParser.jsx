import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes("알고 싶어")) {
      actions.handleFoundItem();
    }

    if (message.includes("슈링크플레이션")) {
      actions.handleShrinkflation();
    }

    if (message.includes("원재료")) {
      actions.handleResourceSimilar();
    }

    if (message.includes("비교")) {
      actions.handleCompare();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
