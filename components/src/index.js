import React from 'react';
import ReactDOM  from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={faker.image.avatar()} alt="avatar" />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 6pm</span>
                    </div>
                    <div className="text">Nice post!</div>
                </div>
            </div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={faker.image.avatar()} alt="avatar" />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 6pm</span>
                    </div>
                    <div className="text">Nice post!</div>
                </div>
            </div>
        </div>
    )
};
if(module.hot) {
    module.hot.accept();
  }


ReactDOM.render(<App />,document.querySelector('#root'));







