import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
       <ApprovalCard>
           <div>
               <h4>Warning#</h4>
               Are you sure u want to do this?
           </div>
           </ApprovalCard> 
      <ApprovalCard>
        <CommentDetail
          user="Jen"
          time="Today at 9:40pm"
          comment="nice post!"
          userpic={faker.image.people()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          user="Alex"
          time="yesterday at 2:40pm"
          comment="amazing!"
          userpic={faker.image.animals()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          user="Luke"
          time="Today at 6:00am"
          comment="Damn!!"
          userpic={faker.image.nature()}
        />
      </ApprovalCard>
    </div>
  );
};

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.querySelector("#root"));
