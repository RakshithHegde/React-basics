import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "what is react?",
    content: "React is a front end js framework",
  },
  {
    title: "why use react?",
    content: "React is a favorite JS library among engineeres",
  },
  {
    title: "How do you use react",
    content: "you use react by creating components",
  },
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
