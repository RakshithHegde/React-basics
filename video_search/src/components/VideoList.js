import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos}) => {
    //props.videos
   const renderedList =  videos.map(() => {
        return <VideoItem />;
    });

    return <div>{renderedList}</div>
};

export default VideoList;
