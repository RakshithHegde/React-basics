import React from 'react';



const CommentDetail = (props) => {
    //console.log(props);
    return (
        <div className="comment">
        <a href="/" className="avatar">
            <img src={props.userpic} alt="avatar" />
        </a>
        <div className="content">
            <a href="/" className="author">  {/* basically props is an argument(object) that will pass the data from this file tp index file*/}
                {props.user}  {/*the user is a reference that will take the input value and display it in browser */}
            </a> 
            <div className="metadata">
                <span className="date">{props.time}</span>
            </div>
            <div className="text">{props.comment}</div>
        </div>
    </div>
    );
};
export default CommentDetail;