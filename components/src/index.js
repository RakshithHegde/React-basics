import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        user="Jen"
        time="Today at 9:40pm"
        comment="nice post!"
        userpic={faker.image.people()}
      />
      <CommentDetail
        user="Alex"
        time="yesterday at 2:40pm"
        comment="amazing!"
        userpic={faker.image.animals()}
      />
      <CommentDetail
        user="Luke"
        time="Today at 6:00am"
        comment="Damn!!"
        userpic={faker.image.nature()}
      />
    </div>
  );
};

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.querySelector("#root"));
