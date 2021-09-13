import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

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
      <Translate />
    </div>
  );
};
